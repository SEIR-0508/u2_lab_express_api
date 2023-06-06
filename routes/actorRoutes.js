const express = require('express');
const router = express.Router();
const Actor = require('../models/Actor');

// Define the routes for actors
router.get('/', async (req, res) => {
  try {
    const actors = await Actor.find();
    res.json(actors);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve actors' });
  }
});

module.exports = router;
