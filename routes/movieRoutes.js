const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// Define the routes for movies
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve movies' });
  }
});

module.exports = router;
