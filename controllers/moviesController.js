const { Movie } = require('../models')
const movieSchema = require('../models/movie.js')

// get all movies
const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find({})
        return res.status(200).json({ movies })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// get one movie by id; incl response for invalid movie id
const getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        if (movie) {
            return res.status(200).json({ movie })
        }
        return res.status(404).send('Movie with specified ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    // all movies
    getAllMovies,
    // one movie
    getMovieById
}