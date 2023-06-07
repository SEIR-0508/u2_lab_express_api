const mongoose = require('mongoose')
const Schema = mongoose.Schema
const db = require('../db')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const Actor = new Schema(
    {
     name: { type: String, required: true },
     age: { type: Number, required: true },
     alive: {type: Boolean, required: true}
    },
    { timestamps: true },
)

module.exports = mongoose.model('actors', Actor)