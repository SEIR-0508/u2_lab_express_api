const mongoose = require("mongoose");
const movieSchema = require('./movies')
const reviewSchema = require('./reviews')
const actorSchema = require('./actors')

const Movie = mongoose.model('Movie', movieSchema)
const Review = mongoose.model('Review', reviewSchema)
const Actor = mongoose.model('Actor', actorSchema)

module.exports = {
      Movie, 
      Review, 
      Actor
}