const express = require('express');
const { getCinemaHalls} = require('./cinemaHalls.controller');

const CinemaHallsRoutes = express.Router();

CinemaHallsRoutes.get('/', getCinemaHalls);

module.exports = CinemaHallsRoutes;