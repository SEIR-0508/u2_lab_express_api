const { Schema } = require("mongoose")

const movieSchema = new Schema(
  {
    title: { type: String, required: true },
    runtime: { type: Number, required: true },
    yearReleased: { type: Number, required: true },
    description: { type: String, required: true },
    actors: [{ type: Schema.Types.ObjectId, ref: "Actor" }],
  },
  { timestamps: true }
)

module.exports = movieSchema
