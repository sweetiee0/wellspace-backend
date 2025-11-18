const mongoose = require('mongoose');

const diarySchema = mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Connects this entry to a specific User
  },
  mood: {
    type: String,
    default: "Neutral", // Default mood if they don't pick one
  },
  content: {
    type: String, // The actual text they write
    required: true,
  },
}, {
  timestamps: true, // Automatically saves 'createdAt' time
});

module.exports = mongoose.model('Diary', diarySchema);