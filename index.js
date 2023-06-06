const express = require('express');
const app = express();
const mongoose = require('mongoose');
const movieRoutes = require('./routes/movieRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const actorRoutes = require('./routes/actorRoutes');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/moviesDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Failed to connect to the database:', error);
  });

// Middleware
app.use(express.json());

// Routes
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);
app.use('/actors', actorRoutes);

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
