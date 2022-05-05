const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  imdbRating: {
    type: Number,
    required: false,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
