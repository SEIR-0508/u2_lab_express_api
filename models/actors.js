const { Schema } = require('mongoose')

const actorSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    alive: { type: Boolean, required: true},
    pronouns: { type: String, required: true},
  },
  { timestamps: true }
)

module.exports = actorSchema