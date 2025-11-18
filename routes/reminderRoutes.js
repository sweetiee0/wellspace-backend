const express = require('express');
const router = express.Router();
const { saveReminders, getReminders } = require('../controllers/reminderController');

router.post('/', saveReminders); // Save settings
router.get('/', getReminders);   // Get settings

module.exports = router;