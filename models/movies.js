const { Schema } = require('mongoose')

const Movies = new Schema(
  {
    title: { type: String, required: true },
    runtimeMinutes: { type: Number, required: true },
    rating: { type: Number, required: true },
    yearReleased: { type: Number, required: true},
    description: { type: String, required: true},
    
},
  { timestamps: true }
)

module.exports = Movies