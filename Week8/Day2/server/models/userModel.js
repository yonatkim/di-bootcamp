// models/userModel.js

const pool = require('../config/database.js');

class UserModel {
  static async createUser(username, email, hashedPassword) {
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const userQuery = 'INSERT INTO users (username, email) VALUES ($1, $2) RETURNING id';
      const userValues = [username, email];
      const userResult = await client.query(userQuery, userValues);
      const userId = userResult.rows[0].id;
      const hashQuery = 'INSERT INTO hashpwd (user_id, password) VALUES ($1, $2)';
      const hashValues = [userId, hashedPassword]; // Pass hashedPassword instead of password
      await client.query(hashQuery, hashValues);
      await client.query('COMMIT');
      return userId;
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  static async getAllUsers() {
    const query = `
        SELECT u.id, u.username, u.email, h.password AS hashed_password
        FROM users u
        LEFT JOIN hashpwd h ON u.id = h.user_id`;
    const result = await pool.query(query);
    return result.rows;
  }

  static async getUserByUsername(username) {
    const query = `
      SELECT u.id, u.username, u.email, h.password
      FROM users u
      INNER JOIN hashpwd h ON u.id = h.user_id
      WHERE u.username = $1
    `;
  
    const values = [username];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async getUserById(id) {
    id = parseInt(id);
    const query = `
        SELECT u.id, u.username, u.email, h.password AS hashed_password
        FROM users u
        LEFT JOIN hashpwd h ON u.id = h.user_id
        WHERE u.id = $1`;
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async updateUserById(id, updatedFields) {
    const { username, email, password } = updatedFields;
    id = parseInt(id);
    
    // constructing the update query dynamically based on the provided fields
    let updateQuery = 'UPDATE users SET ';
    const updateValues = [];
    let index = 1; 
    
    if (username !== undefined) {
        updateQuery += `username = $${index++}, `;
        updateValues.push(username);
    }

    if (email !== undefined) {
        updateQuery += `email = $${index++}, `;
        updateValues.push(email);
    }

    updateQuery = updateQuery.slice(0, -2); // removing trailing comma and space
    updateQuery += ' WHERE id = $' + index + ' RETURNING *'; 
    
    updateValues.push(id); 

    // executing the update query
    const userResult = await pool.query(updateQuery, updateValues);
    const updatedUser = userResult.rows[0];

    // Update the password if provided
    if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const hashQuery = 'UPDATE hashpwd SET password = $1 WHERE user_id = $2';
        const hashValues = [hashedPassword, id];
        await pool.query(hashQuery, hashValues);
    }

    return updatedUser;
  }

}

module.exports = UserModel;
