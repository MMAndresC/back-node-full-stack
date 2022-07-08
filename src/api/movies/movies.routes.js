const express = require('express');
const { postNewMovie, putEditMovie, deleteMovie } = require('./movies.controller');

const MoviesRoutes = express.Router();

MoviesRoutes.post('/add', [isAdmin], postNewMovie);
MoviesRoutes.put('/:id', [isAdmin], putEditMovie);
MoviesRoutes.delete('/:id', deleteMovie);

module.exports = MoviesRoutes;