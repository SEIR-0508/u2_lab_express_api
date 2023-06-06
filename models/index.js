const mongoose = require('mongoose')
const ActorsSchema = require('./actors.js')
const MoviesSchema = require('./movies.js')
const ReviewsSchema = require('./reviews.js')

const Actors = mongoose.model('Actors', ActorsSchema)
const Movies = mongoose.model('Movies', MoviesSchema)
const Reviews = mongoose.model('Reviews', ReviewsSchema)

module.exports = {
    Actors,
    Movies,
    Reviews
}