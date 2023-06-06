const db = require('../db');

const { Movie, Actor, Review } = require('../models')

const main = async () => {
    const actors = await Actor.find()
    const reviews = await Review.find()
    // const GP = await Actor.findOne({ name: "Gwyneth Paltrow"})

    const movies = [
        // {
        //     title: "Seven",
        //     runtime: 125,
        //     rating: R,
        //     yearReleased: 1995,
        //     description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
        //     reviewScore: 4,
        //     // not sure if actors can be an array 
        //     actors: [GP._id, actors[1]._id, actors[2]._id]
        // },
        {
            title: "Seven",
            runtime: 125,
            rating: "R",
            yearReleased: 1995,
            description: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.",
            reviewScore: reviews[0]._id,
            // not sure if actors can be an array 
            actors: [actors[0]._id, actors[1]._id, actors[2]._id]
        },
        {
            title: "Ocean's Eleven",
            runtime: 120,
            rating: "PG13",
            yearReleased: 2001,
            description: "Danny Ocean and his ten accomplices plan to rob three Las Vegas casinos simultaneously.",
            reviewScore: reviews[1]._id,
            actors: [actors[0]._id, actors[6]._id]
        },
        {
            title: "The Shawshank Redemption",
            runtime: 150,
            rating: "R",
            yearReleased: 1994,
            description: "Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.",
            reviewScore: reviews[2]._id,
            actors: [actors[0]._id, actors[4]._id]
        },
        {
            title: "Iron Man",
            runtime: 120,
            rating: "PG13",
            yearReleased: 2008,
            description: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
            reviewScore: reviews[3]._id,
            actors: [actors[3]._id, actors[5]._id]
        }
    ]
    await Movie.deleteMany()
    await Movie.insertMany(movies)
    console.log('inserted movies')
}

const run = async () => {
    await main ()
    db.close()
}

run()