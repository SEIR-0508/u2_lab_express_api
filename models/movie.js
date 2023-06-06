const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const Movie = new Schema(
    {
        title: { type: String, required:true },
        runtime: { type: Number, required: true },
        rating: { type: Number,
                  min:0,
                  max: 100, 
                  required: true },
        year: { type: Number, required: true },
        description: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('movies', Movie)