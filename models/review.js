const { Schema } = require('mongoose')

const reviewSchema = new Schema(
    {
        movie: {type: Schema.Types.ObjectId, ref: 'movie'},
        score: {type: Number, min: 0, max: 100, required: true},
        comment: {type: String, required: true}
    },
    { timestamps: true}
)

module.exports = reviewSchema