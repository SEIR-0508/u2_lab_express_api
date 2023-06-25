const { Actors } = require('../models')
const db = require('../db')



const getActors = async (req, res)=> {
    let actors = await Actors.find() 
    res.send(actors)
}


const getActorById = async (req, res) => {
    try{
        const {id} = req.params
        const actors = await Actors.findById(id)
        if (!actors) throw Error(`review not found ¯\_(ツ)_/¯
        `)
        res.json(actors)
        }catch (e){
            console.log(e)
            res.send(`review not found ¯\_(ツ)_/¯`)
        }
    }

module.exports = {
    getActorById,
    getActors
}