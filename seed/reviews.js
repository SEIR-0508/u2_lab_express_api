const db = require('../db')
const Chance = require('chance')
const { Review } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function createReviews() {
    const reviews = [...Array(15)].map((task) => {
        return new Review({
            ScoreOutOf10: chance.integer({ min: 0, max: 10}),
            Comment: chance.paragraph()
        })
    })
    await Review.insertMany(reviews)
    console.log(`Created Reviews!`)
    return reviews
}











const run = async () => {
    
    await createReviews()
    db.close()
}

run()