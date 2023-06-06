const {Schema} = require('mongoose')

const reviewSchema = new Schema (
    {
        Reviewed_movie: {type: Schema.Types.ObjectId, ref: 'movies'},
        comments: {type: String, required: true},
        review: {type: String, required: true}

    },
     {timestamps: true}


)

module.exports = reviewSchema