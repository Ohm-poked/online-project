//global.crypto = require('crypto');

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // 👈 1. Loads your secret .env file tools

const app = express();


app.use(express.json());

// 👈 2. Fetches your hidden link from the .env file
const dbURI = process.env.MONGO_URI; 

// 👈 3. Connects Mongoose to the database
// 3. PUT IT HERE: Connect to MongoDB using the environment variable
mongoose.connect(dbURI)
  .then(() => console.log('Successfully connected to your Cloud MongoDB database securely!'))
  .catch(err => console.error('Database connection error:', err));

// Routes
const orderRoutes = require('./routes/orderRoutes');
app.get('/', (req, res) => res.send('<h1>Hello, World!</h1>'));
app.use('/orders', orderRoutes);

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log("🚀 Server listening on port " + PORT));
