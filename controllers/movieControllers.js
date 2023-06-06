const { Movie } = require('../models')
const { get } = require('mongoose')

const getAllMovies = async (req, res)=> {
    try {
        const movies = await Movie.find({})
        res.status(200).json({movies})

    } catch(error) {
        return res.status(500).json(error.message)
    }
}

const getMovieById = async (req,res) => {
    try{
        const { id } = req.params
        const movie = await Movie.findById(id)
        if(!movie) throw Error('movie not found')
        res.json(movie)
    }catch (e){
        console.log(e)
        res.send('movie not found')
    }
}

module.exports = {
    getAllMovies,
    getMovieById
}