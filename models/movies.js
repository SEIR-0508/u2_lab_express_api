const { Schema } = require('mongoose')

const movieSchema = new Schema(
    {
      title: { type: String, required: true },
      runtime: { type: String, required: true },
      rating: { type: Number, required: true },
      year_released: { type: Number, required: true },
      description: { type: String, required: true },
      actors: { type: Schema.Types.ObjectId, ref: "actor_id" }
    },
    { timestamps: true }
)

module.exports = movieSchema