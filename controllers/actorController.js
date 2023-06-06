const {Actors} = require('../models')

const getActors = async (req, res) => {
    const actors = await Actors.find()
    console.log(actors)
    res.json(actors)
}


module.exports = {
    getActors
}