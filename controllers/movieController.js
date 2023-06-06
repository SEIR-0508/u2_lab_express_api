const { Movie } = require("../models");

const getMovies = async (req, res) => {
    const movies = await Movie.find({});
    res.json(movies);
};

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie = await Movie.findById(id);
        if (!movie) throw Error("Movie not in database");
        res.json(movie);
    } catch (e) {
        console.log(e);
        res.send("beepboop you meesed up the url");
    }
};

module.exports = {
    getMovies,
    getMovieById,
};
