const db = require('../db')
const { Actors } = require('../models')

db.on('error',console.error.bind(console, 'MongoDB Connection Error'))

const createActors = async() => {
    const actors = [
        {
            name: 'Keanu Reaves',
            age:65,
            alive:true,
            cool:true
        },
        {
            name: 'Will Ferrell',
            age:61,
            alive:true,
            cool:true
        },
        {
            name: 'Alan Rickman',
            age: 50,
            alive:false,
            cool:true
        },
        {
            name:'Sigourney Weaver',
            age:70,
            alive:true,
            cool:true
        },
        {
            name:'Emma Watson',
            age:30,
            alive:true,
            cool:true
        },
        {
            name:'Robin Williams',
            age:50,
            alive:false,
            cool:true
        },
        {
            name: 'Matt Damon',
            age:55,
            alive:true,
            cool:true
        },
        {
            name: 'Heath Ledger',
            age:25,
            alive:false,
            cool:true
        }
    ]
    await Actors.insertMany(actors)
    console.log('Inserted actors')
}

const run = async() =>{
    await createActors()
    db.close()
}

run()
