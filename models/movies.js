//package to create the Plant model
const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: { type: Number, required: true },
        yearReleased: { type: Number, required: true },
        description: { type: String, required: true },
        actors: { type: Array, required: true }
    },
    { timestamps: true }
)

module.exports = movieSchema