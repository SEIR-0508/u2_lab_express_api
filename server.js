// boilerplate
const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

const { Movie, Actor, Review } = require('./models')

// link controllers
// const actorController = 
// const movieController = 
// const reviewController = 

app.listen(PORT, () => {
    console.log(`Express server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send(`This is the landing page`)
})

// endpoint for movies index
app.get('/movies', async (req, res) => {
    const movies = await Movie.find({})
    res.json(movies)
})
// endpoint for movies show route
app.get('/movies/:id', async (req, res) => {
    const { id } = req.params
    const movie = await Movie.findById(id)
    res.json(movie)
})
// endpoint for movies not found

// endpoint for actors index
app.get('/actors', async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
})
// endpoint for actors show route
app.get('/actors/:id', async (req, res) => {
    const { id } = req.params
    const actor = await Actor.findById(id)
    res.json(actor)
})
// endpoint for actors not found

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

// endpoint for reviews not found