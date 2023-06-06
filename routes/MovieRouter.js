const db = require('../db')
const Router = require('express').Router()
const controller = require('../controllers/movieController.js')

Router.get('/', controller.getAllMovies)
Router.get('/:id', controller.getMoviesById)

module.exports = Router