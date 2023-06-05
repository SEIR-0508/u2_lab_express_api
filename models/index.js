const { model } = require('mongoose')
const MovieSchema = require('./movie')
const ReviewSchema = require('./review')
const ActorSchema = require('./actor')

const Movie = model('Movie', MovieSchema)
const Review = model('Review', ReviewSchema)
const Actor = model('Actor', ActorSchema)

module.exports = {
  Movie,
  Review,
  Actor
}