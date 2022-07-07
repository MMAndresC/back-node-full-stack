const mongoose = require('mongoose');


const moviesSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        poster: { type: String, required: true },
        synopsis: {type: String, required: true },
        rated: { type: String, required: true },
        duration: {type: Number },
        genre: { type: String },
        director: { type: String },
        actors: { type: String },
        iniDate: { type: Date },
        finDate: { type: Date },
        isActive: { type: Boolean }
    },
    {
        timestamps: true
    }
);

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;