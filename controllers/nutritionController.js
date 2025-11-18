const Nutrition = require('../models/nutritionModel');

// 1. Add New Food Entry
const addFood = async (req, res) => {
  const { user_id, food_name, calories, meal_type, date } = req.body;

  try {
    const newFood = await Nutrition.create({
      user_id,
      food_name,
      calories,
      meal_type,
      date
    });

    res.status(201).json(newFood);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get Nutrition Log (For a specific date)
const getNutritionLog = async (req, res) => {
  try {
    const { user_id, date } = req.query;
    
    // Find all food items for that user on that specific date
    const logs = await Nutrition.find({ user_id, date });

    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addFood, getNutritionLog };