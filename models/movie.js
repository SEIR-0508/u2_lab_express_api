const { Schema } = require('mongoose')

const Movie = new Schema (
    {
        title: { type: String, required: true },
        runtime: { type: Number, required: true },
        rating: { type: String, required: true },
        yearReleased: { type: Date, required: true },
        description: { type: String, required: true },
        reviewScore: { type: Schema.Types.ObjectId, ref: 'Review', required: true },
        actors: [{ type: Schema.Types.ObjectId, ref: 'Actor', required: true }]
    },
    { timestamps: true }
)

module.exports = Movie