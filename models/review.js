const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        title: { type: String, required: true },
        score: { type: Number, required: true },
        content: { type: String, required: true },
        url: { type: String, required: true },
        date: { type: String, required: true },
        movie_id: { type: Schema.Types.ObjectId, ref: 'movie_id', required: true }
    }
)

module.exports = reviewSchema