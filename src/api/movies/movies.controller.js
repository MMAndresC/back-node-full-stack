const Movies = require('./movies.model');

const postNewMovie = async (req, res, next) => {
    try{
        const newMovie = new Movies(req.body);
        const insertMovie = await newMovie.save();
        return res.status(201).json(insertMovie);
    }catch(err) {
        return next(err);
    }
}


module.exports = {
    postNewMovie,
}