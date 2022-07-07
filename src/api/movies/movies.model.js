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
        actors: { type: String }
    },
    {
        timestamps: true
    }
);

const Movies = mongoose.model('Movies', moviesSchema);

module.exports = Movies;