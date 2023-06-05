const express = require(`express`)
const Router = express.Router()
const controller = require(`../controllers/movieController`)

Router.get(`/`, controller.getMovies)
Router.get(`/:id`, controller.getMovieById)

module.exports = Router