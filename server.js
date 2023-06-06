const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Actor, Movie, Review } = require('./models')
const { getAllActors, getActor } = require('./controllers/actorController')
const { getAllMovies, getMovie } = require('./controllers/movieController')
const { getAllReviews, getReview } = require('./controllers/reviewController')


const app = express()

app.use(cors())
app.use(express.json())

app.get('/', getAllActors)
app.get('//:id', getActor)
app.get('/movies', getAllMovies)
app.get('/movies/:id', getMovie)
app.get('/reviews', getAllReviews)
app.get('/reviews/:id', getReview)


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})