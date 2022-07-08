const Screenings = require('./screenings.model');

const postNewScreening = async (req, res, next) => {
    try{
        const newScreening = new Screenings(req.body);
        const insertScreening = await newScreening.save();
        return res.status(201).json(insertScreening);
    }catch(err){
        return next(err);
    }
}

module.exports = {
    postNewScreening,
}