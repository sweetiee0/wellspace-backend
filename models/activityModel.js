const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Links this data to a specific User
  },
  date: {
    type: String, // We save the date as a string like "2025-11-17"
    required: true,
  },
  run_km: {
    type: Number,
    default: 0,
  },
  steps: {
    type: Number,
    default: 0,
  },
  screen_off_hours: {
    type: Number,
    default: 0,
  },
  calories: {
    type: Number,
    default: 0,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Activity', activitySchema);