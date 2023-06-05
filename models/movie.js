const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        director: { type: String, required: true },
        release_year: { type: String, required: true },
        genre: { type: Array, required: true },
        runtime: { type: Number, required: true },
        rating: { type: Number, required: true },
        description: { type: String, required: true },
        poster: { type: String, required: false }
    }
)

module.exports = movieSchema