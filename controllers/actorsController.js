const { Actor } = require('../models')
const actorSchema = require('../models/actor')

// get all actors
const getActors = async (req, res) => {
    const actors = await Actor.find({})
    res.json(actors)
}

// get one actor by id
const getActorById = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (!actor) throw Error('Actor not found')
        res.json(actor)
    } catch (error) {
        console.log(error)
        res.send('Actor not found')
    }
}


module.exports = {
    // all actors
    getActors,
    // one actor
    getActorById
}