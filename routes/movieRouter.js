const Router = require('express').Router()
const controller = require('../controllers/movieControllers')

Router.get('/movies', controller.getAllMovies)
Router.get('/movies/:id', controller.getMovieById)

module.exports = Router