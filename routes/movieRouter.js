const Router = require('express').Router()
const controller = require('../controllers/movieController')

Router.get('/', controller.getMovies)

module.exports = Router