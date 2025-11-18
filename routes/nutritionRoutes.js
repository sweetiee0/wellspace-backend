const express = require('express');
const router = express.Router();
const { addFood, getNutritionLog } = require('../controllers/nutritionController');

router.post('/', addFood);        // Add food
router.get('/', getNutritionLog); // View food list

module.exports = router;