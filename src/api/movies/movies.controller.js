const Movies = require('./movies.model');

const postNewMovie = async (req, res, next) => {
    try{
        const newMovie = new Movies(req.body);
        const insertMovieDb = await newMovie.save();
        return res.status(201).json(insertMovieDb);
    }catch(err) {
        return next(err);
    }
}

const putEditMovie = async (req, res, next) => {
    try {
        const {id} = req.params;
        const editedMovie = new Movies(req.body);
        editedMovie._id = id;
        const editMovieDb = await Movies.findByIdAndUpdate(id, editedMovie);
        if(!editMovieDb){
            const err = new Error('Movie not found');
            err.status = 404;
            return next(err);
        }
        return res.status(200).json(editMovieDb);
    }catch(err){
        return next(err);
    }
}


module.exports = {
    postNewMovie,
    putEditMovie
}