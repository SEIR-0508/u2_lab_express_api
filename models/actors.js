const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const actorSchema = new Schema({
      name: {
        type: String,
        required: true
      },
      age: {
        type: Number,
        required: true
      },
      alive: {
        type: Boolean,
        required: true
      },
      additionalProperties: {
        type: String
      },
      image: {
        type: String,
        required: true
      }
});

module.exports = actorSchema;