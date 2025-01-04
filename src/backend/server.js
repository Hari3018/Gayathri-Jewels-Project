require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth'); // Adjust path as necessary

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors({ 
  origin: 'http://localhost:3000', // Allow requests from React app
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
  credentials: true // Allow cookies if needed
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => res.send('Hello from Express!'));

// Start Server
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
