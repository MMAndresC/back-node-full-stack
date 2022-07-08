const express = require('express');
const { postNewScreening } = require('./screenings.controller');

const ScreeningsRoutes = express.Router();


ScreeningsRoutes.post('/screenings', postNewScreening);

module.exports = ScreeningsRoutes;