const db = require('../db')
const { Actors,Movies } = require('../models')

db.on('error',console.error.bind(console, 'MongoDB Connection Error'))

const createMovies = async() => {
    const keanuReaves = await Actors.find({name:'Keanu Reaves'})
    const willFerrell = await Actors.find({name:'Will Ferrell'})
    const alanRickman = await Actors.find({name:'Alan Rickman'})
    const sigourneyWeaver = await Actors.find({name:'Sigourney Weaver'})
    const emmaWatson = await Actors.find({name:'Emma Watson'})
    const robinWilliams = await Actors.find({name:'Robin Williams'})
    const mattDamon = await Actors.find({name:'Matt Damon'})
    const heathLedger = await Actors.find({name:'Heath Ledger'})
    const movies = [
        {
            title: 'Dead Poets Society',
            runtime: 110,
            rating: 5,
            yearReleased: 1995,
            actors: robinWilliams[0]._id,
            description: 'Awesome movie'
        },
        {
            title: 'Good Will Hunting',
            runtime: 120,
            rating: 5,
            yearReleased: 1998,
            actors: robinWilliams[0]._id,
            description: 'Dope movie'
        },
        {
            title: 'My Octopus Teacher',
            runtime: 140,
            rating: 5,
            yearReleased: 2020,
            actors: mattDamon[0]._id,
            description: 'My favorite movie'
        },
        {
            title: 'The Talented Mr. Ripley',
            runtime: 110,
            rating: 5,
            yearReleased: 2003,
            actors: mattDamon[0]._id,
            description: 'Amazing acting'
        },
        {
            title: 'The Dark Knight',
            runtime: 170,
            rating: 5,
            yearReleased: 2011,
            actors: heathLedger[0]._id,
            description: 'Awesome movie'
        },
        {
            title: 'Gorillas in the Mist',
            runtime: 130,
            rating: 5,
            yearReleased: 1995,
            actors: sigourneyWeaver[0]._id,
            description: 'Really good and sad'
        },
        {
            title: 'Harry Potter',
            runtime: 110,
            rating: 5,
            yearReleased: 2003,
            actors: emmaWatson[0]._id,
            description: 'One of the best series ever'
        },
        {
            title: 'Die Hard',
            runtime: 120,
            rating: 5,
            yearReleased: 1994,
            actors: alanRickman[0]._id,
            description: 'Christmas movie'
        },
        {
            title: 'The Bourne Identity',
            runtime: 100,
            rating: 5,
            yearReleased: 1999,
            actors: mattDamon[0]._id,
            description: 'Such a good movie'
        },
        {
            title: '10 Things I Hate About You',
            runtime: 105,
            rating: 5,
            yearReleased: 1995,
            actors: heathLedger[0]._id,
            description: 'Really fun movie'
        },
        {
            title: 'Alien',
            runtime: 140,
            rating: 5,
            yearReleased: 1995,
            actors: sigourneyWeaver[0]._id,
            description: 'Never seen it'
        },
        {
            title: 'Kicking and Screaming',
            runtime: 90,
            rating: 5,
            yearReleased: 1990,
            actors: willFerrell[0]._id,
            description: 'Awesome movie'
        },
        {
            title: 'Good Morning Vietnam',
            runtime: 130,
            rating: 5,
            yearReleased: 1995,
            actors: robinWilliams[0]._id,
            description: 'Awesome movie'
        },
        {
            title: 'The Matrix',
            runtime: 125,
            rating: 5,
            yearReleased: 1991,
            actors: keanuReaves[0]._id,
            description: 'Amazing'
        }
    ]
    await Movies.insertMany(movies)
    console.log('Inserted many movies')
}

const run = async() =>{
    await createMovies()
    db.close()
}

run()