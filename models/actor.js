const { Schema } = require('mongoose')
const mongoose = require('mongoose')

const actorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  alive: {
    type: Boolean,
    required: true
  },
  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
},
{timestamps: true})

const Actor = mongoose.model('Actor', actorSchema)
module.exports = Actor