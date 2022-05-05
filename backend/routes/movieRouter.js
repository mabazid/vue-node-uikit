const router = require('express').Router();
const movieController = require('../controller/movieController');

router.get('/', movieController.fetchMovies);

router.get('/add', movieController.addMovie);

router.get('/delete:movieId', movieController.deleteMovie);

router.get('/edit:movieId', movieController.editMovie);

module.exports = router;
