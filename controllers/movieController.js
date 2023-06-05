const { Movie } = require('../models')
const movieSchema = require('../models/movies')

const getMovies = async (req,res) => {
    const movies = await Movie.find({})
    res.json(movies)
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
    getMovies,
    getMovieById
}