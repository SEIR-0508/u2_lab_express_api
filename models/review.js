const db = require('../db')
const { Schema } = require('mongoose')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const reviewSchema = new Schema(
    {
        ScoreOutOf10: { type: Number, required: true },
        Comment: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = reviewSchema