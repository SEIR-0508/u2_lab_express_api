const express = require('express')
const Router = express.Router()

const actorRouter = require('./actorRouter')
const movieRouter = require('./movieRouter')
const reviewRouter = require('./reviewRouter')

Router.use('/actors', actorRouter)
Router.use('/movies', movieRouter)
Router.use('/reviews', reviewRouter)

module.exports = Router