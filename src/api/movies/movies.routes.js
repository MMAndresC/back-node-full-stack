const express = require('express');
const { postNewMovie, putEditMovie } = require('./movies.controller');

const MoviesRoutes = express.Router();

MoviesRoutes.post('/add', postNewMovie);
MoviesRoutes.put('/:id', putEditMovie);

module.exports = MoviesRoutes;