const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: String, required: true},
        alive: {type: Boolean, required: true},
        movies: [{type: Schema.Types.ObjectId, ref: 'movies'}]
    },
    { timestamps: true}
)

module.exports = actorSchema