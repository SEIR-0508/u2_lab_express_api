const db = require('../db')
const { Actor } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actors = [
        {
           name: 'Florence Pugh',
           age: 27,
           alive: true,
           pronouns: "she/her"
        },
        {
            name: 'Timothee Chalamet',
            age: 27,
            alive: true,
            pronouns: "he/him"
        },
        {
            name: 'Idina Menzel',
            age: 52,
            alive: true,
            pronouns: "she/her"
        },
        {
            name: 'Joaquin Phoenix',
            age: 48,
            alive: true,
            pronouns: "he/him"
        },
        {
            name: 'Daniel Kaluuya',
            age: 34,
            alive: true,
            pronouns: "he/him"
        },
        {
            name: "Halle Bailey",
            age: 23,
            alive: true,
            pronouns: "she/her"
        },
        {
           name: "Megan Fox",
           age: 37,
           alive: true,
           pronouns: "she/her"
        },
        {
            name: "Elliot Page",
            age: 36,
            alive: true,
            pronouns: "he/they"
        },
        {
            name: "Millicent Simmonds",
            age: 20,
            alive: true,
            pronouns: "she/her"
        },
        {
            name: "Awkwafina",
            age: 35,
            alive: true,
            pronouns: "she/her"
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