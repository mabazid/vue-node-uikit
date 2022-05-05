const Movie = require('../model/Movie');

exports.fetchMovies = async (_, res) => {
  const movies = await Movie.find();
  await res.status(200).json(movies);
};
