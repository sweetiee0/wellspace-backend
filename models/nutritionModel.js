const mongoose = require('mongoose');

const nutritionSchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  food_name: {
    type: String,
    required: true, // e.g., "Chicken Rice"
  },
  calories: {
    type: Number,
    required: true, // e.g., 500
  },
  meal_type: {
    type: String,
    enum: ['Breakfast', 'Lunch', 'Dinner', 'Snack'], // Only allow these values
    default: 'Breakfast',
  },
  date: {
    type: String, // Format: "2025-11-18"
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Nutrition', nutritionSchema);