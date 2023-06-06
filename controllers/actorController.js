const mongoose = require('mongoose') 
const Actor = require('../models/movie.js')


const getAllActors = async (req, res) => {
    try{
        const actors = await Actor.find({})
        .populate('actorsArrray')
        return res.status(200).json({actors})
    }catch( error) {
        return res.status(500).send(error.message)
    }
}

const getActorsById = async (req, res) => {
     try{
         const { id } = req.params
         const actor = await Actor.findById(id)
         if (!actor) throw Error('product not found')
         res.json(actor)
     }
     catch(e){
        console.log(e)
        res.send('product not found')
     }
}

module.exports ={
    getAllActors,
    getActorsById
}