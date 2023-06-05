const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
      movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
      },
      score: {
        type: Number,
        min: 1,
        max: 10,
        required: true
      },
      comment: {
        type: String,
        required: true
      }
});

module.exports = reviewSchema;