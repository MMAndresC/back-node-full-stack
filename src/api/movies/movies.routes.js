const express = require('express');
const { postNewMovie, putEditMovie, deleteMovie, getMoviesAdmin } = require('./movies.controller');
const { isAdmin } = require('../../utils/middlewares/auth.middleware');

const MoviesRoutes = express.Router();

MoviesRoutes.post('/add', [isAdmin], postNewMovie);
MoviesRoutes.put('/:id', [isAdmin], putEditMovie);
MoviesRoutes.delete('/:id', [isAdmin], deleteMovie);
MoviesRoutes.get('/', [isAdmin], getMoviesAdmin);

module.exports = MoviesRoutes;