const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        {
            name: 'Margot Robbie',
            age: 32,
            status: true
        },
        {
            name: 'Meryl Streep',
            age: 73,
            status: true
        },
        {
            name: 'Marilyn Monroe',
            age: 36,
            status: false
        },
        {
            name: 'Henry Cavill',
            age: 40,
            status: true
        },
        {
            name: 'Judy Garland',
            age: 47,
            status: false
        }
    ]
    await Actor.insertMany(actors)
    console.log('Created actors!')
}

const run = async () => {
      await main()
      db.close()
    }
    run()