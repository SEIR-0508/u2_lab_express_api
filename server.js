const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const controllers = require('./controllers')

const { Movie } = require('./models')
const { Actor } = require('./models')
const { Review } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('This is the root!')
})

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}!`)
})

app.get('/movies', controllers.getAllMovies)
app.get('/actors', controllers.getAllActors)
app.get('/reviews', controllers.getAllReviews)
app.get('/movies/:id', controllers.getMovieById)
app.get('/actors/:id', controllers.getActorById)
app.get('/reviews/:id', controllers.getReviewById)

