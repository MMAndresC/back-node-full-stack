const express = require('express');
const { postNewMovie, putEditMovie, deleteMovie, getMoviesAdmin, getPremieres } = require('./movies.controller');
const { isAdmin } = require('../../utils/middlewares/auth.middleware');

const MoviesRoutes = express.Router();

MoviesRoutes.post('/add', [isAdmin], postNewMovie);
MoviesRoutes.put('/edit/:id', [isAdmin], putEditMovie);
MoviesRoutes.delete('/delete/:id', [isAdmin], deleteMovie);
MoviesRoutes.get('/admin', [isAdmin], getMoviesAdmin);
MoviesRoutes.get('/premiere', getPremieres);

module.exports = MoviesRoutes;