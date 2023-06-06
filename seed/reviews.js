const db = require('../db');
const { Movie, Review } = require('../models');

const main = async () => {
    const movies  = await Movie.find()
    const reviews = [
        
    {
        movieTitle: movies[Math.floor(Math.random() * movies.length)]._id,
        score: 5,
        comment: "insert data here" 
    },
    {
        movieTitle: movies[Math.floor(Math.random() * movies.length)]._id,
        score: 4,
        comment: "insert data here" 
    },
    {
        movieTitle: movies[Math.floor(Math.random() * movies.length)]._id,
        score: 3,
        comment: "insert data here"
    },
    {
        movieTitle: movies[Math.floor(Math.random() * movies.length)]._id,
        score: 2,
        comment: "insert data here"
    },
    {
        movieTitle: movies[Math.floor(Math.random() * movies.length)]._id,
        score: 5,
        comment: "insert data here"
    },
    {
        movieTitle: movies[Math.floor(Math.random() * movies.length)]._id,
        score: 4,
        comment: "insert data here"
    }
]
await Review.deleteMany();
await Review.insertMany(reviews)
console.log('created reviews')
}

const run = async () => {
    await main()
    db.close()
}

run()
   