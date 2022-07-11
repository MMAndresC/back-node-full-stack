const Screenings = require('./screenings.model');

const putEditScreening = async (req, res, next) => {
    try {
        const {id} = req.params;
        const editedScreening = new Screenings(req.body);
        editedScreening._id = id;
        const editScreeningDb = await Screenings.findByIdAndUpdate(id, editedScreening);
        if(!editScreeningDb){
            const err = new Error('Screening not found');
            err.status = 404;
            return next(err);
        }
        return res.status(200).json(editScreeningDb);
    }catch(err){
        return next(err);
    }
}

const postNewScreening = async (req, res, next) => {
    try{
        const newScreening = new Screenings(req.body);
        const insertScreening = await newScreening.save();
        return res.status(201).json(insertScreening);
    }catch(err){
        return next(err);
    }
}

const getScreeningByMovie = async (req, res, next) => {
    try{
        const { id } = req.params;
        const screeningsMovie = await Screenings.find({idMovie: id}).populate('idHall').sort({date:1});
        return res.status(201).json(screeningsMovie);
    }catch(err){
        return next(err);
    }
}

module.exports = {
    postNewScreening,
    getScreeningByMovie,
    putEditScreening,
}