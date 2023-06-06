const { Actor } = require('../models')
const { get } = require('mongoose')

const getAllActors = async (req, res)=> {
    try {
        const actors = await Actor.find({})
        res.status(200).json({actors})

    } catch(error) {
        return res.status(500).json(error.message)
    }
}

const getActorById = async (req,res) => {
    try{
        const { id } = req.params
        const actor = await Actor.findById(id)
        if(!actor) throw Error('actor not found')
        res.json(actor)
    }catch (e){
        console.log(e)
        res.send('actor not found')
    }
}

module.exports = {
    getAllActors,
    getActorById
}
