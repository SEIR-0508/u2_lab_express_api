const { Schema } = require('mongoose')

const Movie = new Schema({
    title: {type: String, require: true},
    runtime: {type: String, require: true},
    yearRelease: {type: Number, require: true},
    briefDescription: {type: String, max: 300},
})

module.exports = Movie