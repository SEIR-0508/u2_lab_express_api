const express = require('express')
const Router = express.Router()

const ActorRouter = require('./actorsRoute')
const MovieRouter = require('./moviesRoute')
const ReviewRouter = require('./reviewsRoute')

Router.use('/actors', ActorRouter)
Router.use('/movies', MovieRouter)
Router.use('/reviews', ReviewRouter)

module.exports = Router