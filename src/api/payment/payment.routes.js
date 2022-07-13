const express = require('express');
const { checkoutSession } = require('./payment.controller');

const PaymentRoutes = express.Router();

PaymentRoutes.post('/', checkoutSession );

module.exports = PaymentRoutes;

