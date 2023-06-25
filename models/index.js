const mongoose =  require('mongoose')
const movieSchema = require('./Movies')
const actorSchema = require('./Actors')
const reviewSchema = require('./Reviews')


const Movies = mongoose.model('Movies', movieSchema)
const Actors  = mongoose.model('Actors', actorSchema)
const Reviews  = mongoose.model('Review', reviewSchema)


module.exports = {Movies, Actors, Reviews}