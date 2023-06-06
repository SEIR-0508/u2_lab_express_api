const { Schema } = require('mongoose')

const Review = new Schema (
    {
        movieTitle: { type: Schema.Types.ObjectId, ref: 'Movie', required: true },
        score: { type: Number, required: true, min: 1, max: 5 },
        comment: { type: String, required: true }
    },
    { timestamps: true }
)

module.exports = Review