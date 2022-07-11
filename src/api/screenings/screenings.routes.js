const express = require('express');
const { isAdmin,isAuthenticated } = require('../../utils/middlewares/auth.middleware');
const { postNewScreening, getScreeningByMovie, putEditScreening, updateSeatsById } = require('./screenings.controller');

const ScreeningsRoutes = express.Router();

ScreeningsRoutes.put('/edit/:id', [isAuthenticated], putEditScreening);
ScreeningsRoutes.put('/update/:id', updateSeatsById);
ScreeningsRoutes.post('/add', [isAdmin], postNewScreening);
ScreeningsRoutes.get('/:id', getScreeningByMovie);


module.exports = ScreeningsRoutes;