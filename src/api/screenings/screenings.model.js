const mongoose = require('mongoose');


const screeningsSchema = new mongoose.Schema(
    {
        idMovie: { type: mongoose.Types.ObjectId, ref: 'Movies', required: true },
        idHall: { type: mongoose.Types.ObjectId, ref: 'CinemaHalls' , required: true },
        date: { type:Date, required: true },
        hour: { type: String, required: true },
        takenSeat: { type: [Number], required: true}
    },
    {
        timestamps: true
    }
);

const Screenings = new mongoose.model('Screenings', screeningsSchema);

module.exports = Screenings;