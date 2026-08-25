//global.crypto = require('crypto');
require('dotenv').config(); // MUST be at the very top of the file
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
app.use(express.json());
// MANDATORY MIDDLEWARE: Allows Express to parse form data
app.use(express.urlencoded({ extended: true }));
// Serve Static Assets: Instructs Express to serve your index.html out of the public folder
app.use(express.static(path.join(__dirname, 'public')));



// 👈 2. Fetches your hidden link from the .env file
const dbURI = process.env.MONGO_URI; 


// 3. PUT IT HERE: Connect to MongoDB using the environment variable
// Connect to your local MongoDB database
mongoose.connect(dbURI)
  .then(() => console.log('✅ Connected to MongoDB successfully!'))
  .catch(err => console.error('❌ Database connection error:', err));

// Schema Blueprint Definition
const contactSchema = new mongoose.Schema({
  name: String,
  email: String
});
const Contact = mongoose.model('Contact', contactSchema);

// Form Handling Route
app.post('/submit-form', async (req, res) => {
  try {
    const newEntry = new Contact({
      name: req.body.fullName,
      email: req.body.userEmail
    });

    await newEntry.save();
    res.send('<h3>Data successfully stored into MongoDB Compass!</h3><a href="/">Return Home</a>');
  } catch (error) {
    res.status(500).send('Error saving cloud database entity: ' + error.message);
  }
});

const orderRoutes = require('./routes/orderRoutes');
app.get('/', (req, res) => res.send('<h1>Hello, World!</h1>'));
app.use('/orders', orderRoutes);



const PORT = process.env.PORT || 3000;


app.listen(PORT, () => console.log("🚀 Server listening on port " + PORT));
