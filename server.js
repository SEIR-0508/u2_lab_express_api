// boilerplate
const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

// link controllers
const actorsController = require('./controllers/actorsController.js')
const moviesController = require('./controllers/moviesController.js')
const reviewsController = require('./controllers/reviewsController.js')

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
})

app.get('/', (req, res) => res.send(`This is the landing page for Elliot's movie database!`))
app.get('/movies', moviesController.getAllMovies)
// AAU I want to sort my movies by newest or oldest √
app.get('/movies/sort', moviesController.movieSort)
app.get('/movies/:id', moviesController.getMovieById)
app.get('/actors', actorsController.getActors)
app.get('/actors/:id', actorsController.getActorById)
app.get('/reviews', reviewsController.getAllReviews)
// AAU I want to sort my reviews by ascending or descending order √
app.get('/reviews/sort', reviewsController.reviewSort)
app.get('/reviews/:id', reviewsController.getReviewById)




// AAU I want an error message to display if I search for an Actor, Movie, or Review with an incorrect ID √
    // completed in controller files

// AAU I want to Create, Update, and Delete my Actors, Movies, and Reviews using either ThunderClient or a query.js file 