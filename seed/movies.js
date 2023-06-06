const db = require('../db')
const { Movie, Actor, Review } = require('../models/')

//connect to database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const actorArray = [
    new Actor({ name: 'Matthew McConaughey', age: 53, alive: true}),
    new Actor({ name: 'Brad McConaughey', age: 53, alive: true}),
    new Actor({ name: 'Matthew Pitt', age: 53, alive: true}),
    new Actor({ name: 'Matthew Jackson', age: 53, alive: true}),
    new Actor({ name: 'Jackson McConaughey', age: 53, alive: true}),
    new Actor({ name: 'Matthew Brad', age: 53, alive: true}),
    new Actor({ name: 'Josh McConaughey', age: 53, alive: true}),
    new Actor({ name: 'Matthew Pitt', age: 53, alive: true}),
    new Actor({ name: 'Pitt McConaughey', age: 53, alive: true}),
    new Actor({ name: 'Matthew George', age: 53, alive: true}),
]
const movieArray = [
    new Movie({ title: 'Interstellar', runtime: 120, rating: 8, yearReleased: 2012, description: 'lorem ipsum', actors: [actorArray[0], actorArray[1], actorArray[2]] }),
    new Movie({ title: 'Prestige', runtime: 120, rating: 8, yearReleased: 2012, description: 'lorem ipsum', actors: [actorArray[0], actorArray[1], actorArray[2]] }),
    new Movie({ title: 'Inception', runtime: 120, rating: 8, yearReleased: 2012, description: 'lorem ipsum', actors: [actorArray[0], actorArray[1], actorArray[2]] }),
    new Movie({ title: 'Movie', runtime: 120, rating: 8, yearReleased: 2012, description: 'lorem ipsum', actors: [actorArray[0], actorArray[1], actorArray[2]] }),
    new Movie({ title: 'Interstellar', runtime: 120, rating: 8, yearReleased: 2012, description: 'lorem ipsum', actors: [actorArray[0], actorArray[1], actorArray[2]] })
]

const reviewArray = [
    new Review({ movie: movieArray[0], score: 4, comment: 'Pretty good!' }),
    new Review({ movie: movieArray[0], score: 4, comment: 'Pretty good!' }),
    new Review({ movie: movieArray[2], score: 4, comment: 'Pretty good!' }),
    new Review({ movie: movieArray[1], score: 4, comment: 'Pretty good!' }),
    new Review({ movie: movieArray[3], score: 4, comment: 'Pretty good!' })
]

const main = async () => {
    await Actor.insertMany(actorArray)
    await Movie.insertMany(movieArray)
    await Review.insertMany(reviewArray)

}

const run = async () => {
    await main()
    db.close()
}

run()

