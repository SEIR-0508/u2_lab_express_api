
const { Schema } = require('mongoose')
const db = require('../db')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const movieSchema = new Schema(
    {
        Title: { type: String, required: true },
        Runtime: { type: String, required: true },
        Rating: { type: String, required: true },
        YearReleased: { type: Number, required: true },
        Description: { type: String, required: true },
        Actors: { type: Array, required: true},
        Reviews: { type: Array, required:true }
    },
    { timestamps: true },
)

module.exports = movieSchema