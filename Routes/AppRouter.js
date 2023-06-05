const express = require('express');
//using this thing called the Router, which is built into express
const Router = express.Router()
//importing our two individual router files
const ActorsRouter = require('./actorsRouter')
const MoviesRouter = require('./moviesRouter')
const ReviewsRouter = require('./reviewsRouter')

//setting up our basic routes
Router.use('/actors', ActorsRouter)
Router.use('/movies', MoviesRouter)
Router.use('/reviews', ReviewsRouter)

module.exports = Router