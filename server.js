const express = require('express')
const cors = require('cors')
const PORT = 3001 
const db = require('./db')
const { Movie, Actor, Review } = require('./models')
const app = express()

app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
  res.send('This is root!')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

// MOVIES ROUTE
app.get('/movies', async (req, res) => {
  const movies = await Movie.find({})
  res.json(movies)
})

// ACTORS ROUTE
app.get('/actors', async (req, res) => {
  const actors = await Actor.find({})
  res.json(actors)
})

// REVIEWS ROUTE/SORT
app.get('/reviews', async (req, res) => {
      const reviews = await Review.find({})
})
