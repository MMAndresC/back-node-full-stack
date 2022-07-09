const express = require('express');
const { isAdmin } = require('../../utils/middlewares/auth.middleware');
const { postNewScreening, getScreeningByMovie } = require('./screenings.controller');

const ScreeningsRoutes = express.Router();


ScreeningsRoutes.post('/add', [isAdmin], postNewScreening);
ScreeningsRoutes.get('/:id', getScreeningByMovie);

module.exports = ScreeningsRoutes;