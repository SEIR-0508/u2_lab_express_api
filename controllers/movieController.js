const {Movies} = require('../models')

const getMovies = async (req, res) => {
    const movies = await Movies.find()
    console.log(movies)
    res.json(movies)
}


module.exports = {
    getMovies
}