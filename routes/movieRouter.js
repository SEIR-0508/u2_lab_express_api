const Router = require('express').Router()
const controller = require('../controllers/movies-controller.js')


//list route - an index of all movies
Router.get('/', controller.getMovies)
//show route - displaying individual movies
Router.get('/:id', controller.getMovieById)

module.exports = Router











// const Movie = require('../models/movie.js')
// const db = require('./db')


// Router.get('/', (req, res) => {
//     Movie.find({}, (err, movies) => {
//         if (err) {
//             console.error(err)
//             res.status(500).send('Internal server Error')
//         } else {
//             res.json(movies)
//         }
//     })
// })



// Router.get('/:id', (req, res) => {
//     const movieId = req.params.id;
//     Movie.findById(movieId, (err, movie) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Internal Server Error');
//       } else if (!movie) {
//         res.status(404).send('Movie not found');
//       } else {
//         res.json(movie);
//       }
//     })
//   })
  
//   module.exports = Router;

  