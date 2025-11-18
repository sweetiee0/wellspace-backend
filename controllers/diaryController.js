const Diary = require('../models/diaryModel');

// 1. Create a new Diary Entry
const createEntry = async (req, res) => {
  try {
    const { user_id, mood, content } = req.body;

    const newEntry = await Diary.create({
      user_id,
      mood,
      content,
    });

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get all Diary Entries for a specific User
const getEntries = async (req, res) => {
  try {
    const { user_id } = req.query;
    
    // Find entries and sort by newest first (-1)
    const entries = await Diary.find({ user_id }).sort({ createdAt: -1 }); 

    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createEntry, getEntries };