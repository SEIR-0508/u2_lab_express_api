const { Movie } = require('../models');
const { Actor } = require('../models');
const { Review } = require('../models');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        return res.status(200).json({ movies })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movie.findById(id)
        if (movie) {
            return res.status(200).json({ movie })
        }
        return res.status(404).send('Movie with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllActors = async (req, res) => {
    try {
        const actors = await Actor.find()
        return res.status(200).json({ actors })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getActorById = async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actor.findById(id)
        if (actor) {
            return res.status(200).json({ actor })
        }
        return res.status(404).send('Actor with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getReviewById = async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findById(id)
        if (review) {
            return res.status(200).json({ review })
        }
        return res.status(404).send('Review with the specified ID does not exists')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMovies,
    getAllActors,
    getAllReviews,
    getMovieById,
    getActorById,
    getReviewById
}