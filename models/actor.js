const { Schema } = require('mongoose')
const db = require('../db')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const actorSchema = new Schema(
    {
        Name: { type: String, required: true },
        Age: { type: Number, required: true },
        Alive: { type: Boolean, required: true }
    },
    { timestamps: true },
)

module.exports = actorSchema