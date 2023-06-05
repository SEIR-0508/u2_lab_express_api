

const mongoose = require('mongoose')
const ActorSchema = require('./actors')
const MovieSchema = require('./movies')
const ReviewSchema = require('./reviews')

//we can give them any name we want, but like so much else in JS, it would be counterintuitive to not give it a semantic, recognizable name
const Actor = mongoose.model('Actor', ActorSchema)
const Movie = mongoose.model('Movie', MovieSchema)
const Review = mongoose.model('Review', ReviewSchema)

module.exports = {
  Actor,
  Movie,
  Review
}