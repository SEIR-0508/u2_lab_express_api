const Router = require('express').Router()
const actorsRouter = require('./actorsRouter')
const moviesRouter = require('./moviesRouter')
const reviewsRouter = require('./reviewsRouter')

Router.use('/actors', actorsRouter)
Router.use('/movies', moviesRouter)
Router.use('/reviews', reviewsRouter)

module.exports = Router