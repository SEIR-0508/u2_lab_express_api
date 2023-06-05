const { Schema } = require('mongoose')

const actorSchema = new Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true },
        alive: { type: Boolean, required: true },
        role: { type: String, required: true },
        headshot: { type: String, required: false }
    },
    { timestamps: true }
)

module.exports = actorSchema