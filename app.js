// app.js
const express = require('express');
const bodyParser = require('body-parser');
const recipeRoutes = require('./routes/recipeRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

// Middleware
app.use(bodyParser.json()); // Parse JSON bodies

// Routes
app.use('/api', recipeRoutes); // Use the routes defined in recipeRoutes
app.use('/api', categoryRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the Recipe Backend');
});

const PORT = process.env.PORT || 3000;
const IPAddress = process.env.IPAddress || '';
app.listen(PORT, IPAddress, () => {
  console.log(`\x1b[36mServer is running on port ${PORT} & IP: ${IPAddress}`);
});