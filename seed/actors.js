const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const actors = [
        {
            name: 'Keanu Reeves',
            age: 58,
            alive: true
        },
        {
            name: 'Patrick Swayze',
            age: 57,
            alive: false
        },
        {
            name: 'Brad Pitt',
            age: 59,
            alive: true
        },
        {
            name: 'Christoph Waltz',
            age: 66,
            alive: true
        },
        {
            name: 'Mitsuo Iwata',
            age: 55,
            alive: true
        },
        {
            name: 'Nozomu Sasaki',
            age: 56,
            alive: true
        },
        {
            name: 'Matthew Broderick',
            age: 61,
            alive: true
        },
        {
            name: 'Alan Ruck',
            age: 66,
            alive: true
        },
        {
            name: 'Clint Eastwood',
            age: 93,
            alive: true
        },
        {
            name: 'Eli Wallach',
            age: 98,
            alive: false
        }
    ]
    await Actor.insertMany(actors)
    console.log('created actors')
}

const run = async () => {
    await main()
    db.close
}

run()