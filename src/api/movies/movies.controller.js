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

const deleteMovie = async (req, res, next) => {
    try{
        const { id } = req.params;
        const delMovieDb = await Movies.findByIdAndDelete(id);
        if(!delMovieDb){
            const err = new Error('Movie not found');
            err.status = 404;
            return next(err);
        }
        return res.status(200).json(delMovieDb);
    }catch(err) {
        return next(err);
    }
}

const getMoviesAdmin = async (req, res, next) => {
    try{
        const allMovies = await Movies.find();
        return res.status(200).json(allMovies);
    }catch(err){
        return next(err);
    }
}

const getPremieres = async (req, res, next) => {
    
    try{
        const premieres = await Movies.find({isActive: true});
        return res.status(200).json(premieres);
    }catch(err){
        return next(err);
    }
}


module.exports = {
    postNewMovie,
    putEditMovie,
    deleteMovie,
    getMoviesAdmin,
    getPremieres,
}