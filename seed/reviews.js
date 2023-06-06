const db = require('../db')
const { Reviews,Movies } = require('../models')

db.on('error', console.error.bine(console, 'connect fail'))

const insertReviews = async () => {
    const harry = await Movies.find({title:'Harry Potter and the Prisoner of Azkaban'})
    const titanic = await Movies.find({})

    const reviews = [
        
    ]

    await Movies.insertMany(movies)
    console.log('movies inserted')
}

const run = async () => {
    await insertMovies()
    db.close()
}

run()