const express = require('express')
const Router = require('express').Router()
const moviesController = require('../controllers/moviesController.js')






Router.get('/', moviesController.getMovies)

Router.get('/:id', moviesController.getMoviesById)




module.exports = Router