const mongoose = require('mongoose');
const { Schema } = require('mongoose');
const Actor = require('./actor');
const Review = require('./review');

const movieSchema = new Schema({
  title: { type: String, required: true },
  runTime: { type: String, required: true },
  rating: { type: String, required: true },
  yearReleased: { type: Number, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  actor: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor', required: true }],
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review', required: true }]
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
