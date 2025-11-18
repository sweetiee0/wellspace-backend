const express = require('express');
const router = express.Router();
const { updateActivity, getActivity } = require('../controllers/activityController');

router.post('/', updateActivity); // Save data
router.get('/', getActivity);     // Read data

module.exports = router;