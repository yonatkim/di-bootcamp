// controllers/userController.js

const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs');


// registering a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await UserModel.createUser(username, email, hashedPassword);
    res.status(201).json({ id: userId, message: 'registerUser: user registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'registerUser: internal server error' });
  }
};

// logging in a user
exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.getUserByUsername(username);
    if (!user) {
      return res.status(404).json({ message: 'loginUser: user not found' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'loginUser: invalid credentials' });
    }
    res.status(200).json({ id: user.id, message: 'loginUser: login successful' });
  } catch (error) {
    res.status(500).json({ message: 'loginUser: internal server error' });
  }
};

// fetching all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'getAllUsers: internal server error' });
  }
};

// fetching a user by ID
exports.getUserById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await UserModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'getUserByID: user not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'getUserByID: internal server error' });
  }
};

// updating a user by ID
exports.updateUserById = async (req, res) => {
  try {
    const id  = parseInt(req.params.id);
    const updatedFields = req.body;
    const updatedUser = await UserModel.updateUserById(id, updatedFields);
    if (!updatedUser) {
      return res.status(404).json({ message: 'updateUserByID: user not found' });
    }
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: 'updateUserByID: internal server error' });
  }
};
