const Activity = require('../models/activityModel');

// 1. Update or Create Activity Data
const updateActivity = async (req, res) => {
  const { user_id, date, run_km, steps, screen_off_hours, calories } = req.body;

  try {
    // Check if activity for this specific date already exists
    let activity = await Activity.findOne({ user_id, date });

    if (activity) {
      // If it exists, just update the numbers
      activity.run_km = run_km;
      activity.steps = steps;
      activity.screen_off_hours = screen_off_hours;
      activity.calories = calories;
      
      await activity.save();
      res.json(activity);
    } else {
      // If it does not exist, create a new record
      const newActivity = await Activity.create({
        user_id,
        date,
        run_km,
        steps,
        screen_off_hours,
        calories
      });
      res.status(201).json(newActivity);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get Activity Data (For the dashboard)
const getActivity = async (req, res) => {
  try {
    const { user_id, date } = req.query;
    const activity = await Activity.findOne({ user_id, date });

    if (activity) {
      res.json(activity);
    } else {
      res.json({ message: "No data found for this date" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { updateActivity, getActivity };