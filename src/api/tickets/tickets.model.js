const mongoose = require('mongoose');

const ticketsSchema = new mongoose.Schema(
    {
        clientEmail: { type: String, required: true },
        clientName: { type: String, required: true },
        movie: { type: String, required: true },
        hall: { type: String, required: true },
        date: { type: String, required: true },
        hour: { type: String, required: true },
        mySeats: { type:[Number], required: true },
        qr: { type: String },
    },
    {
        timestamps: true
    }
);

const Tickets = mongoose.model('Tickets', ticketsSchema);

module.exports = Tickets;
