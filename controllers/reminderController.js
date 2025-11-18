const Reminder = require('../models/reminderModel');

// 1. Save or Update Reminders
const saveReminders = async (req, res) => {
  const { user_id, breakfast_alert, activity_alert, water_reminder, lunch_alert } = req.body;

  try {
    let reminder = await Reminder.findOne({ user_id });

    if (reminder) {
      reminder.breakfast_alert = breakfast_alert;
      reminder.activity_alert = activity_alert;
      reminder.water_reminder = water_reminder;
      reminder.lunch_alert = lunch_alert;
      
      const updatedReminder = await reminder.save();
      res.json(updatedReminder);
    } else {
      const newReminder = await Reminder.create({
        user_id,
        breakfast_alert,
        activity_alert,
        water_reminder,
        lunch_alert
      });
      res.status(201).json(newReminder);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 2. Get Reminder Settings
const getReminders = async (req, res) => {
  try {
    const { user_id } = req.query;
    const reminder = await Reminder.findOne({ user_id });

    if (reminder) {
      res.json(reminder);
    } else {
      res.json({
        breakfast_alert: false,
        activity_alert: false,
        water_reminder: false,
        lunch_alert: false
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { saveReminders, getReminders };