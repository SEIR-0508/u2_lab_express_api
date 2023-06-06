const db = require('../db');
const { Actor } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error'));


const main = async () => {

const actors = [
    {
        name: "Brad Pitt",
        age: 59,
        alive: true
    },
    {
        name: "Morgan Freeman",
        age: 86,
        alive: true
    },
    {
        name: "Kevin Spacey",
        age: 63,
        alive: true
    },
    {
        name: "Gwyneth Paltrow",
        age: 50,
        alive: true
    },
    {
        name: "Tim Robbins",
        age: 64,
        alive: true
    },
    {
        name: "Robert Downey Jr.",
        age: 58,
        alive: true
    },
    {
        name: "George Clooney",
        age: 62,
        alive: true
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