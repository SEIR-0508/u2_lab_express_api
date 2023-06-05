const express = require('express')
const Router = express.Router()
const movieController = require('../controllers/movieController.js')

Router.get('/', movieController.getMovies)

Router.get('/:id', movieController.getMovieById)

module.exports = Router