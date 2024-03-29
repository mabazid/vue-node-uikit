const Movie = require('../models/movie');

module.exports = {
  createMovie: async function (movie) {
    const newMovie = new Movie({
      name: movie.name,
      description: movie.description,
      rating: movie.rating,
      imdbRating: movie.imdbRating,
    });
    // const response1 = await newMovie.save();
    await newMovie.save();

    return 'done';
  },

  getMovies: async function () {
    const moviesList = await Movie.find();
    return moviesList;
  },
};
