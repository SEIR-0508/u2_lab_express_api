const Router = require('express').Router()
const movieRouter = require('./movieRouter')
const actorRouter = require('./actorRouter')
const reviewRouter = require('./reviewRouter')

Router.use('/movies', movieRouter)
Router.use('/actors', actorRouter)
Router.use('/reviews', reviewRouter)

module.exports = Router