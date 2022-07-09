const mongoose = require('mongoose');

const cinemaHallsSchema = new mongoose.Schema(
    {
        rows: { type: Number, required: true },
        cols: { type: Number, required: true },
        name: { type: String, required: true },
        cod: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

const CinemaHalls = mongoose.model("CinemaHalls", cinemaHallsSchema);

module.exports = CinemaHalls;