const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const reviewSchema = new Schema({
    score: {type: String, required: true},
    comment: {type: String, required: true}
})


const Review = mongoose.model('Review', reviewSchema)

module.exports = Review