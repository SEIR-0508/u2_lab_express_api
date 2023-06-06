const Router = require('express').Router()
const controller = require('../controllers/moviesController')

Router.get('/', controller.findMovies)
Router.get('/:id', controller.findMoviesById)
Router.post('/', controller.createMovie)
Router.put('/', controller.updateMovie)// use id=""&whatToUpdate=""&update=""
Router.delete('/:id', controller.deleteMovie)

module.exports = Router