const mongoose = require('mongoose')
const movieSchema = require('./movie.js')
const actorSchema = require('./actor.js')
const reviewSchema = require('./review.js')

const Movie = mongoose.model('Movie', movieSchema)
const Actor = mongoose.model('Actor', actorSchema)
const Review = mongoose.model('Review', reviewSchema)

module.exports = {
    Movie,
    Actor,
    Review
}