 const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

// Route for Register
router.post('/register', registerUser);

// Route for Login
router.post('/login', loginUser);

module.exports = router;