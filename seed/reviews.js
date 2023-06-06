const db = require('../db')
const { Reviews,Movies } = require('../models')

db.on('error', console.error.bind(console, 'connect fail'))

const insertReviews = async () => {
    const harry = await Movies.find({title:'Harry Potter and the Prisoner of Azkaban'})
    const titanic = await Movies.find({title: 'Titanic'})
    const avengers = await Movies.find({title: 'The Avengers'})
    const avatar = await Movies.find({title: 'Avatar'})
    const pride = await Movies.find({title: 'Pride and Prejudice'})

    const reviews = [
        {
            score: 5,
            comment: 'The best movie in Harry Potter series.',
            movie_id: harry[0]._id
        },
        {
            score: 4,
            comment: `This is the third movie in the series, and it's the darkest one yet.`,
            movie_id: harry[0]._id
        },
        {
            score: 5,
            comment: 'I cried my eyes out when Jack sink into the ocean.',
            movie_id: titanic[0]._id
        },
        {
            score: 5,
            comment: `I have watched Titanic how many times I don't know. Everytime I watch it, I still cry, laugh, smile, and feel.`,
            movie_id: titanic[0]._id
        },
        {
            score: 5,
            comment: 'A masterpiece with unprecedented visual effect.',
            movie_id: avatar[0]._id
        },
        {
            score: 3,
            comment: 'Visually mind-blowing, but lacking in the story',
            movie_id: avatar[0]._id
        }
    ]

    await Reviews.insertMany(reviews)
    console.log('reviews inserted')
}

const run = async () => {
    await insertReviews()
    db.close()
}

run()