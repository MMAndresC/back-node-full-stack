const express = require('express');
const { postNewTicket, getTicketsByClient } = require('./tickets.controller');


const TicketsRoutes = express.Router();

TicketsRoutes.post('/add', postNewTicket);
TicketsRoutes.get('/:email', getTicketsByClient);

module.exports = TicketsRoutes;