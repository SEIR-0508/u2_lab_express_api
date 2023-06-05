const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
      title: {
        type: String,
        required: true
      },
      runtime: {
        type: Number,
        required: true
      },
      rating: {
        type: Number,
        required: true
      },
      yearReleased: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      posterImage: {
        type: String,
        required: true
      }
});

module.exports = movieSchema;
