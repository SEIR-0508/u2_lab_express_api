const { Actors } = require('../models')

const findActors = async (req, res) => {
    const actors = await Actors.find()
    res.json(actors)
}

const findActorsById = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actors.findById(id)
        if(!actor) throw Error('Actor not found')
        res.status(200).json(actor) 
    } catch (e) {
        console.log(e)
        res.status(404).send(`This actor was not found`)
    }
}

const createActor = async (req, res) => {
    try {
        const actor = await new Actors(req.query)
        await actor.save()
        if(!actor) throw Error('Actor not created')
        return res.status(201).json(actor)
    } catch (e) {
        console.log(e)
        res.status(500).send('Actor not created')
    }
} 

const updateActorsById = async (req, res) => {
    try {
        const actor = await Actors.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!actor) throw Error('Cannot update actor')
        res.status(201).json(actor)
    } catch (e) {
        console.log(e)
        res.status(500).send('Actor does not exist')
    }
}

const deleteActor = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actors.findByIdAndDelete(id)
        if(!actor) throw Error('Cannot delete actor')
        res.status(200).json(actor)
    } catch (e) {
        console.log(e)
        res.status(500).send('Actor not found')
    }
}

module.exports = {
    findActors,
    findActorsById,
    createActor,
    updateActorsById,
    deleteActor
}