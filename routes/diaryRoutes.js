const express = require('express');
const router = express.Router();
const { createEntry, getEntries } = require('../controllers/diaryController');

router.post('/', createEntry); //Write data
router.get('/', getEntries); //Read data

module.exports = router;
