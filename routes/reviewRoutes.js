const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve reviews' });
  }
});

module.exports = router;
