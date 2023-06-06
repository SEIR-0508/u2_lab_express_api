const { Schema } = require('mongoose')

const reviewsSchema = new Schema (
    {
        rating: { type: Number, 
            required: true, 
            min: [1, `Rating cannot be below 1`],
            max: [5, 'Rating cannot be above 5'],
            },
        review: { type: String, required: true},
        reviewer: { type: String, required: true},
        movie: { type: Schema.Types.ObjectId, ref: "Movie"}
    },
    { timestamps: true}
)

module.exports = reviewsSchema