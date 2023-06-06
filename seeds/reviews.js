const db = require('../db')
const { Movies,Reviews } = require('../models')

db.on('error',console.error.bind(console, 'MongoDB Connection Error'))

const createReviews = async() => {
    const bourneIdentity = await Movies.find({title:'Bourne Identity'})
    const goodWillHunting = await Movies.find({title:'Good Will Hunting'})
    const darkKnight = await Movies.find({title:'The Dark Knight'})
    const reviews= [
        {
            movie: darkKnight._id,
            score: 5,
            comment: 'Amazing acting, super well written.'
        },
        {
            movie: darkKnight._id,
            score: 4,
            comment: 'Great, but I fell asleep.'
        },
        {
            movie: goodWillHunting._id,
            score: 5,
            comment: 'Brilliant. Depicts the impact of trauma beautifully.'
        },
        {
            movie: goodWillHunting._id,
            score: 1,
            comment: 'Not realistic.'
        },
        {
            movie: bourneIdentity._id,
            score: 5,
            comment: 'Best action movie ever.'
        },
        {
            movie: bourneIdentity._id,
            score: 5,
            comment: "It's good."
        }
    ]
    await Reviews.insertMany(reviews)
    console.log('Inserted reviews')
}

const run = async() =>{
    await createReviews()
    db.close()
}

run()