const { Schema } = require('mongoose')

const Review = new Schema({
    score: {type: Number, enum:[1, 2, 3, 4, 5], description: 'must be an integer from 1-5'},
    comment: {type: String, 'max': 300},
    movie_id: {type: Schema.Types.ObjectId, ref: 'Movie'}
})

module.exports = Review