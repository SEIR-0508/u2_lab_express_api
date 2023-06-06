const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const actorSchema = new Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    alive: {type: Boolean, default: true, required: true},
    image: {type: String, required: true}
})

const Actor = mongoose.model('Actor', actorSchema)

module.exports = Actor