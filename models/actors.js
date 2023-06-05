const { Schema } = require('mongoose')

const Actors = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    active: { type: String, required: true}
  },
  { timestamps: true }
)

module.exports = Actors