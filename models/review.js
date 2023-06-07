const { Schema } = require('mongoose');

const reviewSchema = new Schema({
  score: {
    type: Number,
    min: 0,
    max: 10,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
    required: true
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;