const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
        title: {type: String, required: true},
        runtime: {type: String, required: true},
        rating: {type: String, required: true},
        year_released: {type: String, required: true},
        description: {type: String, required: true},
        actors: [{type: String}]
    },
    { timestamps: true}
)

module.exports = movieSchema