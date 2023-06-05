const db = require('../db')
const Chance = require('chance')
const { Actor } = require('../models')

const chance = new Chance()

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

async function createActors() {
    const actors = [...Array(15)].map((task) => {
        return new Actor({
            Name: `${chance.first()} ${chance.last()}`,
            Age: chance.integer({min: 15, max: 90}),
            Alive: chance.bool({likelihood: 90})
        })
    })
    await Actor.insertMany(actors)
    console.log(`Created Actors!`)
    return actors
}











const run = async () => {
    
    await createActors()
    db.close()
}

run()