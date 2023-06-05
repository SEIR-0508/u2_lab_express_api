const db = require('../db')
const { Actor, Movie } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const joaquinPhoenix = await Actor.find({ name: "Joaquin Phoenix" })
    const florencePugh = await Actor.find({ name: "Florence Pugh" })
    const timotheeChalamet = await Actor.find({ name: "Timothee Chalamet" })
    const idinaMenzel = await Actor.find({ name: "Idina Menzel" })
    const danielKaluuya = await Actor.find({ name: "Daniel Kaluuya" })

    const movies = [
        {
            title: 'Beau is Afraid',
            runtime: "2h 59m",
            rating: 7.1,
            year_released: 2023,
            description: "Following the sudden death of his mother, a mild-mannered but anxiety-ridden man confronts his darkest fears as he embarks on an epic, Kafkaesque odyssey back home.",
            actors: joaquinPhoenix[0].name
        },
        {
            title: "Don't Worry, Darling",
            runtime: "2h 3m",
            rating: 6.2,
            year_released: 2022,
            description: "A 1950s housewife living with her husband in a utopian experimental community begins to worry that his glamorous company could be hiding disturbing secrets.",
            actors: florencePugh[0].name
        },
        {
            title: "Dune",
            runtime: "2h 35m",
            rating: 8.0,
            year_released: 2021,
            description: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions of a dark future.",
            actors: timotheeChalamet[0].name
        },
        {
            title: "Uncut Gems",
            runtime: "2h 15m",
            rating: 7.4,
            year_released: 2019,
            description: "With his debts mounting and angry collectors closing in, a fast-talking New York City jeweler risks everything in hope of staying afloat and alive.",
            actors: idinaMenzel[0].name
        },
        {
            title: "Get Out",
            runtime: "1h 44m",
            rating: 7.7,
            year_released: 2017,
            description: "A young African-American visits his White girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
            actors: danielKaluuya[0].name
        }
    ]

    await Movie.insertMany(movies)
    console.log('Created movies with actors!')
}

const run = async () => {
    await main()
    db.close()
}

run()