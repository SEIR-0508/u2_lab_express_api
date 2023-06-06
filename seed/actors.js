const db = require('../db')
const { Actors, Movies } = require('../models')

db.on('error', console.error.bind(console, 'connect fail'))

const insertActors = async () => {
    const harry = await Movies.find({title:'Harry Potter and the Prisoner of Azkaban'})
    const titanic = await Movies.find({title: 'Titanic'})
    const avengers = await Movies.find({title: 'The Avengers'})
    const avatar = await Movies.find({title: 'Avatar'})
    const pride = await Movies.find({title: 'Pride and Prejudice'})
    const actors = [
        {
            name: 'Daniel Radcliffe',
            age: 34,
            live: true,
            movie_id: harry[0]._id
        },
        {
            name: 'Emma Watson',
            age: 33,
            live: true,
            movie_id: harry[0]._id
        },
        {
            name: 'Leonardo DiCaprio',
            age: 48,
            live: true,
            movie_id: titanic[0]._id
        },
        {
            name: 'Kate Winslet',
            age: 47,
            live: true,
            movie_id: titanic[0]._id
        },
        {
            name: 'Scarlett Johansson',
            age: 38,
            live: true,
            movie_id: avengers[0]._id
        },
        {
            name: 'Chris Evans',
            age: 42,
            live: true,
            movie_id: avengers[0]._id
        },
        {
            name: 'Sam Worthington',
            age: 46,
            live: true,
            movie_id: avatar[0]._id
        },
        {
            name: 'Zoe Saldana',
            age: 44,
            live: true,
            movie_id: avatar[0]._id
        },
        {
            name: 'Keira Knightley',
            age: 38,
            live: true,
            movie_id: pride[0]._id
        },
        {
            name: 'Matthew Macfadyen',
            age: 48,
            live: true,
            movie_id: pride[0]._id
        },
    ]
    await Actors.insertMany(actors)
    console.log('actors inserted')
}

const run = async () => {
    await insertActors()
    db.close()
}

run()