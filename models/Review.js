const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  score: Number,
  comment: String,
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
  },
});

module.exports = mongoose.model('Review', reviewSchema);
