const { Schema } = require('mongoose')

const Actor = new Schema(
    {
        title: {type: String, required: true},
        description: {type: String, required: true },
        actors: {type: Schema.Types.ObjectId, ref: 'Actor'},
        rating: {type: Number, required: true},
        year_released: {type: Number, required: true},
        length_in_minutes: {type: Number, required: true}
    },
    {timestamps: true}
)