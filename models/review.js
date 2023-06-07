const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const Review = new Schema(
    {
        rating: { type: Number,
                  min:0,
                  max: 100, 
                  required: true },
        blurb: { type: String, required: true },
        critic: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('reviews', Review)