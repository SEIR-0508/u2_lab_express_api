const db = require('../db')
const { Actors, Movies } = require('../models')

db.on('error', console.error.bine(console, 'connect fail'))

const addActors = async () => {
    const actors = [
        {
            name: 'Lily Collins',
            age: 34,
            live: true,
            inHarryPotter: false
        },
        {
            name: 'Emma Watson',
            age: 33,
            live: true,
            inHarryPotter: true
        },
        {
            name: 'Emma Watson',
            age: 33,
            live: true,
            inHarryPotter: true
        },
    ]
}