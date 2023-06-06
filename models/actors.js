const { Schema } = require('mongoose')

const actorsSchema = new Schema (
    {
        name: { type: String, required: true},
        dob: { type: String, required: true},
        hometown: { type: String, required: true},
        movie: { type: Schema.Types.ObjectId, ref: "Movies"}
    },
    { timestamps: true}
)

module.exports = actorsSchema
