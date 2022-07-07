const express = require('express');
const { postNewMovie } = require('./movies.controller');

const MoviesRoutes = express.Router();

MoviesRoutes.post('/add', postNewMovie);

module.exports = MoviesRoutes;