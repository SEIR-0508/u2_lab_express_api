// boilerplate
const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

// link controllers
const actorsController = require('./controllers/actorsController.js')
const moviesController = require('./controllers/moviesController.js')
// const reviews Controller = 

// WITHOUT controller files: 
// const { Movie, Actor, Review } = require('./models')

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
})

// establish root endpoint
app.get('/', (req, res) => res.send(`This is the landing page for Elliot's movie database!`))

// endpoint for movies index
app.get('/movies', moviesController.getAllMovies)
// WITHOUT CONTROLLER FILE:
    // app.get('/movies', async (req, res) => {
    //     const movies = await Movie.find({})
    //     res.json(movies)
    // })
    
// endpoint for movies show route
app.get('/movies/:id', moviesController.getMovieById)
    // WITHOUT CONTROLLER FILE:
        // app.get('/movies/:id', async (req, res) => {
        //     const { id } = req.params
        //     const movie = await Movie.findById(id)
        //     res.json(movie)
        // })

// endpoint for actors index
app.get('/actors', actorsController.getActors)
    // WITHOUT CONTROLLER FILE:
        // app.get('/actors', async (req, res) => {
        //     const actors = await Actor.find({})
        //     res.json(actors)
        // })

// endpoint for actors show route
app.get('/actors/:id', actorsController.getActorById)
    // WITHOUT CONTROLLER FILE:
        // app.get('/actors/:id', async (req, res) => {
        //     const { id } = req.params
        //     const actor = await Actor.findById(id)
        //     res.json(actor)
        // })

// endpoint for reviews index
app.get('/reviews', async (req, res) => {
    const reviews = await Review.find({})
    res.json(reviews)
})

// endpoint for reviews show route
app.get('/reviews/:id', async (req, res) => {
    const { id } = req.params
    const review = await Review.findById(id)
    res.json(review)
})

