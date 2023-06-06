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
        return res.status(404).send('Movie with that ID does not exist')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// sort by release year
const movieSort = async (req, res) => {
    const sortOrder = `${req.query.order}`
    if (sortOrder === 'asc' || sortOrder === 'Asc' || sortOrder === 'ASC') {
        const sortAsc = await Movie.find({}).sort({ release_year: 1 })
        return res.status(200).json({ sortAsc })
    } else if (sortOrder === 'desc' || sortOrder === 'Desc' || sortOrder === 'DESC') {
        const sortDesc = await Movie.find({}).sort({ release_year: -1 })
        return res.status(200).json({ sortDesc })
    } else {
        res.status(404).send(`Path not found`)
    }
}
 

module.exports = {
    getAllMovies,
    getMovieById,
    movieSort
}