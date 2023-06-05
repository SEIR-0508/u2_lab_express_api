const { model } = require('mongoose')
const ActorsSchema = require('./actors')
const MoviesSchema = require('./movies')
const ReviewsSchema = require('./reviews')
const Actors = model('Actors', ActorsSchema)
const Movies = model('Movies', MoviesSchema)
const Reviews = model('Reviews', ReviewsSchema)

module.exports = {
  Actors,
  Movies,
  Reviews
}