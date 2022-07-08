const express = require('express');
const { postNewMovie, putEditMovie, deleteMovie } = require('./movies.controller');

const MoviesRoutes = express.Router();

MoviesRoutes.post('/add', postNewMovie);
MoviesRoutes.put('/:id', putEditMovie);
MoviesRoutes.delete('/:id', deleteMovie);

module.exports = MoviesRoutes;