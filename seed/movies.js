const db = require('../db')
const Chance = require('chance')
const { Movie, Actor, Review } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function createMovies() {
    const randomReviews = await Review.find({})
    const randomActors = await Actor.find({})
    const movies = [...Array(8)].map((task) => {
        const numOfReviews = chance.integer({min: 1, max: 3})
        const numOfActors = chance.integer({min: 3, max: 6})
        const selectedActors = chance.pickset(randomActors, numOfActors)
        const selectedReviews = chance.pickset(randomReviews, numOfReviews)
        return {
            Title: chance.word({ syllables: 3 }),
            Runtime: `${chance.integer({min: 1, max: 3})}:${chance.integer({min: 0, max: 59})}`,
            Rating: `${chance.integer({min: 0, max: 10})}/10`,
            YearReleased: chance.integer({min: 1950, max: 2023}),
            Description: chance.paragraph(),
            Actors: selectedActors.map((actor) => actor.Name),
            Reviews: selectedReviews.map((review) => review)
        }
    })
    await Movie.insertMany(movies)
    console.log(`Created Movies!`)
    return movies
}











const run = async () => {
    await createMovies()
    db.close()
}

run()