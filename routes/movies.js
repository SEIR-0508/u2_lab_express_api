const express = require('express')
const Router = express.Router()
const Movie = require('../models/movie.js')
const db = require('./db')


Router.get('/', (req, res) => {
    Movie.find({}, (err, movies) => {
        if (err) {
            console.error(err)
            res.status(500).send('Internal server Error')
        } else {
            res.json(movies)
        }
    })
})



Router.get('/:id', (req, res) => {
    const movieId = req.params.id;
    Movie.findById(movieId, (err, movie) => {
      if (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      } else if (!movie) {
        res.status(404).send('Movie not found');
      } else {
        res.json(movie);
      }
    })
  })
  
  module.exports = Router;