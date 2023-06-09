const { Schema } = require('mongoose')

const Review = new Schema(
    {
        movie: {type: Schema.Types.ObjectId, ref: 'Movie'},
        score: {type: Number, required: true, },
        comment: {type: String, required: true}
    },
    {timestamps: true}
)