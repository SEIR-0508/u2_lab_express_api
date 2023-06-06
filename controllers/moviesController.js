const { Movies } = require('../models')

const findMovies = async (req, res) => {
    const movies = await Movies.find()
    res.json(movies)
}

const findMoviesById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movies.findById(id)
        if(!movie) throw Error ('Movie not found')
        res.status(200).json(movie)
    } catch (e) {
        console.log(e)
        res.status(500).send('This movie was not found')
    }
}

const createMovie = async (req, res) => {
    try {
        const movie = await new Movies(req.query)
        await movie.save()
        if(!movie) throw Error('Movie not created')
        return res.status(201).json(movie)
    } catch (e) {
        console.log(e)
        res.status(500).send('Movie not created')
    }
}

const updateMovie = async (req, res) => {
    try {
        const movie = await Movies.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!movie) throw Error ('Movie not found')
        res.status(201).json(movie)
    } catch (e) {
        console.log(e)
        res.status(500).send('Movie was not found')
    }
}

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movies.findByIdAndDelete(id)
        if(!movie) throw Error('Cannot find Movie')
    } catch (e) {
        console.log(e)
        res.status(500).send('Movie was not found')
    }
}

module.exports = {
    findMovies,
    findMoviesById,
    createMovie,
    updateMovie,
    deleteMovie
}