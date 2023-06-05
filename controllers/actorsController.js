const { Actors } = require('../models')


const getActors = async (req, res)=> {
    const actors = await Actors.find({})
    res.json(actors)
}

const getActorsById = async (req,res) => {
    try{
    const { id } = req.params
    const actors = await Actors.findById(id)
    if(!actors) throw Error('actors not found')
    res.json(actors)
    }catch (e){
        console.log(e)
        res.send('actors not found')
    }
}

module.exports = {
    getActors,
    getActorsById
}
