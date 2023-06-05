// boilerplate
const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const app = express()

const { Movie, Actor } = require('./models')

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

// endpoint for actors index
// endpoint for reviews index

// endpoint for movies show route
// endpoint for actors show route
// endpoint for reviews show route

// endpoint for movies not found
// endpoint for actors not found
// endpoint for reviews not found