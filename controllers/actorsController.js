const { Actors } = require('../models')

const getAllActors = async(req,res) => {
    try{
        const actors = await Actors.find()
        return res.status(200).json({ actors })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getActor = async(req,res) => {
    try{
        const { id } = req.params
        const actor = await Actors.findById(id)
        if (actor){
            return res.status(200).json({ actor })
        } else {
            return res.status(400).send('Actor Doesnt Exist')
        }
    } catch (error){
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllActors,
    getActor
}