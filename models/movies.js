const { Schema } = require('mongoose')

const moviesSchema = new Schema (
    {
        name: { type: String, required: true},
        producer: { type: String, required: true},
        datePublished: { type: String, required: true},
        runTime: { type: Number, required: true},
        description: { type: String, required: true},
        poster: { type: String, required: true},
        rating: { type: Number, required: true, default: 0}
    },
    { timestamps: true}
)

module.exports = moviesSchema
