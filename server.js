const db = require('./db')
const express = require('express')
const app = express()
const cors = require('cors')
const Actors = require('./controllers/actorsController')
const Movies = require('./controllers/movieController')
const Reviews = require('./controllers/reviewsController')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

db.on('error', console.error.bind(console,'MongoDB not running'))

const PORT = 3001
app.listen(PORT, ()=>console.log(`Listening on PORT ${PORT}`))

app.get('/', Actors.getAllActors)
app.get('/:id', Actors.getActor)

app.get('/movies', Movies.getAllMovies)
app.get('/movies/:id', Movies.getMovie)

app.get('/reviews', Reviews.getAllReviews)
app.get('/reviews/:id', Reviews.getReview)