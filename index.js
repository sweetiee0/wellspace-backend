const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// --- IMPORT ROUTES ---
const authRoutes = require('./routes/authRoutes');
const activityRoutes = require('./routes/activityRoutes');
const diaryRoutes = require('./routes/diaryRoutes');
const reminderRoutes = require('./routes/reminderRoutes');
const nutritionRoutes = require('./routes/nutritionRoutes'); // <-- NEW (Nutrition)

// 1. Setup Environment
dotenv.config();
const app = express();
// Use PORT 5002 (or whatever port you set in .env)
const PORT = process.env.PORT || 5002;

// 2. Middleware
app.use(express.json());
app.use(cors());

// 3. Routes Definition
app.use('/api/auth', authRoutes);          // 1. Login/Register
app.use('/api/activity', activityRoutes);  // 2. Activity Tracker
app.use('/api/diary', diaryRoutes);        // 3. Mood Diary
app.use('/api/reminders', reminderRoutes); // 4. Reminders
app.use('/api/nutrition', nutritionRoutes);// 5. Nutrition Log (Active!)

// Test Route
app.get('/', (req, res) => {
  res.send('WellSpace Backend is Running Completely!');
});

// 4. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ SUCCESS: Database Connected!'))
  .catch((err) => console.error('❌ ERROR:', err));

// 5. Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});