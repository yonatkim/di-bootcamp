// routes/userRoutes.js

const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');
const UserController = require('../controllers/userController');

router.post('/register', async (req, res) => {
  try {
    await UserController.registerUser(req, res);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/login', async (req, res) => {
  try {
    await UserController.loginUser(req, res);
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/users', async (req, res) => {
  try {
    await UserController.getAllUsers(req, res);
  } catch (error) {
    console.error('Error fetching all users:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    await UserController.getUserById(req, res);
  } catch (error) {
    console.error('Error fetching user by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    await UserController.updateUserById(req, res);
  } catch (error) {
    console.error('Error updating user by ID:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
