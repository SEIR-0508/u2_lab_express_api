const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  runtime: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  yearReleased: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  posterImage: {
    type: String
  }
},
{timestamps: true})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie;
