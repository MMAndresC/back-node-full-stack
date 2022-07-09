const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const screeningsSchema = new Schema(
    {
        idHall: { type: Schema.Types.ObjectId, ref: 'CinemaHalls' , required: true },
        idMovie: { type: Schema.Types.ObjectId, required: true},
        movie: { type: String, required: true },
        date: { type:String, required: true },
        hour: { type: [String], required: true },
        takenSeat: { type: [Number], required: true}
    },
    {
        timestamps: true
    }
);

const Screenings = mongoose.model('Screenings', screeningsSchema);

module.exports = Screenings;