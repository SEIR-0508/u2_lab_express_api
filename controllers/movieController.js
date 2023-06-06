const { Movie } = require('../models/index');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        return res.status(200).json({ movies })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id)
        if (movie) {
            return res.status(200).json({ movie });
        }
        return res.status(404).send('Movie with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getAllMovies,
    getMovie
}