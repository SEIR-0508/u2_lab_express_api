const { Schema } = require('mongoose')

const reviewSchema = new Schema(
  {
    score: { type: Number, required: true },
    comment: { type: String, required: true },
    movie: { type: Schema.Types.ObjectId, ref: 'movie_id' }
  },
  { timestamps: true }
)

module.exports = reviewSchema