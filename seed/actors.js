const db = require('../db')
const { Movie, Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const lawrence = await Movie.find({ title: 'Lawrence of Arabia' })
    const rotk = await Movie.find({ title: 'The Lord of the Rings: The Return of the King'})
    const oceans8 = await Movie.find({ title: `Ocean's 8`})
    const mummy = await Movie.find({ title: 'The Mummy'})
    const madmax = await Movie.find({ title: 'Mad Max: Fury Road' })

    const actors = [
        {
            name: 'Sandra Bullock',
            age: 58,
            alive: true,
            role: 'Debbie Ocean',
            headshot: `https://i.imgur.com/2JFiEAj.jpg`
        },
        {
            name: 'Ian McKellen',
            age: 84,
            alive: true,
            role: 'Gandalf',
            headshot: `https://i.imgur.com/itON6e4.jpg`
        },
        {
            name: 'Brendan Fraser',
            age: 54,
            alive: true,
            role: `Rick O'Connell`,
            headshot: `https://i.imgur.com/LSIWq1e.jpg`
        },
        {
            name: `Peter O'Toole`,
            age: 81,
            alive: false,
            role: 'T.E. Lawrence',
            headshot: `https://i.imgur.com/cHpi0Tl.jpg`
        },
        {
            name: 'Tom Hardy',
            age: 45,
            alive: true,
            role: 'Max Rockatansky',
            headshot: `https://i.imgur.com/rB64NMW.jpg`
        },
        {
            name: 'Charlize Theron',
            age: 47,
            alive: true,
            role: 'Imperator Furiosa',
            headshot: `https://i.imgur.com/gwHbkQg.jpg`
        },
        {
            name: 'Omar Sharif',
            age: 83,
            alive: false,
            role: 'Sherif Ali',
            headshot: `https://i.imgur.com/gwAVlQb.jpg`
        },
        {
            name: 'Elijah Wood',
            age: 42,
            alive: true,
            role: 'Frodo',
            headshot: `https://i.imgur.com/tW7Tkws.jpg`
        },
        {
            name: 'Viggo Mortensen',
            age: 64,
            alive: true,
            role: 'Aragorn',
            headshot: `https://i.imgur.com/0iVSnhw.jpg`
        },
        {
            name: 'Rachel Weisz',
            age: 53,
            alive: true,
            role: 'Evelyn Carnahan',
            headshot: `https://i.imgur.com/AZzYeqE.jpg`
        }
    ]
    await Actor.deleteMany()
    await Actor.insertMany(actors)
    console.log('created actors')
}

const run = async () => {
    await main()
    db.close()
}

run()