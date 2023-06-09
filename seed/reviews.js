const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const pointBreak = await Movie.find({title: 'Point Break'})
    const ingloriousBasterds = await Movie.find({title: 'Inglorious Basterds'})
    const akira = await Movie.find({title: 'Akira'})
    const ferrisBuellersDayOff = await Movie.find({title: "Ferris Bueller's Day Off"})
    const theGoodTheBadAndTheUgly = await Movie.find({title: "The Good, The Bad, and The Ugly"})

    const reviews = [
        {
            movie: pointBreak._id,
            score: 9,
            comment: "Incredible action and incredible acting"
        },
        {
            movie: ingloriousBasterds._id,
            score: 10,
            comment: "This is Tarantino's best. The acting, the story, the suspense. It's got it all."
        },
        {
            movie: akira._id,
            score: 9,
            comment: "One of the hallmark classics of Japanese animation that blows my mind even to this day."
        },
        {
            movie: ferrisBuellersDayOff._id,
            score: 9.5,
            comment: "This is actually my favorite movie of all time. I feel like this film speaks to me spiritually."
        },
        {
            movie: theGoodTheBadAndTheUgly._id,
            score: 10,
            comment: "Such a classic. Such an incredible story. How could anyone not love this one."
        }

    ]
    await Review.insertMany(revies)
    console.log('created movies with actors')
}
const run = async () => {
    await main()
    db.close()
}

run()