const mongoose = require('mongoose');

const CinemaHallsSchema = new mongoose.Schema({
    rows: { type: Number, required: true },
    cols: { type: Number, required: true },
    name: { type: String, required: true }
},
{
    timestamps: true
});

const CinemaHalls = mongoose.model("CinemaHalls", CinemaHallsSchema);

module.exports = CinemaHalls;