const { Schema } = require('mongoose')

const Actor = new Schema({
    name: {type: String, require: true},
    age: {type: Number, require: true},
    live: {type: Boolean, require: true},
    movie_id: {type: Schema.Types.ObjectId, ref: 'movie_id'}
})

module.exports = Actor