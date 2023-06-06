const mongoose = require('mongoose')
const actorSchema = require('./actor')
const movieSchema = require('./movie')
const reviewSchema = require('./review')

const Actors = mongoose.model('Actors', actorSchema)
const Movies = mongoose.model('Movies', movieSchema)
const Reviews = mongoose.model('Reviews', reviewSchema)

module.exports = {
    Actors,
    Movies,
    Reviews
}