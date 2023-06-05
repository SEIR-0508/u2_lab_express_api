const db = require('../db')
const { Review, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const mamaMia = await Movie.find({ title: 'Mama Mia!' })
    const enolaHolmes = await Movie.find({ title: 'Enola Holmes' })
    const wizardOfOz = await Movie.find({ title: 'The Wizard of Oz' })

    const reviews = [
        {
            score: 7,
            comment: 'Streep vacillates engagingly between playing herself and not taking herself too seriously.',
            movie: mamaMia[0]._id
        },
        {
            score: 8,
            comment: `Mamma Mia is the light hearted comedy that I'm sure any musical lover could enjoy.`,
            movie: mamaMia[0]._id
        },
        {
            score: 7,
            comment: `A new take on a classic, just enjoy it for what we enjoy films for... A fun, engaging story...`,
            movie: enolaHolmes[0]._id
        },
        {
            score: 9,
            comment: `Mille Bobby Brown is excellent, Sam Claflin is extraordinary and Henry Cavil is being Henry Cavil.`,
            movie: enolaHolmes[0]._id
        },
        {
            score: 8,
            comment: `The Wizard of Oz is enjoyable for people of all ages. Everything about it brings a smile to my face.`,
            movie: wizardOfOz[0]._id
        },
        {
            score: 10,
            comment: `Wizard of Oz has the universal themes of the value of friendship and family, of how many of us have strengths and virtues inside of us we'll never believe we have until tested, and how many powerful people are literally all hot air.`,
            movie: wizardOfOz[0]._id
        }
    ]
    await Review.insertMany(reviews)
    console.log('Created reviews!')
}

const run = async () => {
      await main()
      db.close()
    }
    run()