const CinemaHalls = require('./cinemaHalls.model');

const getCinemaHalls = async (req, res, next) => {
    try{
        const allHalls = await CinemaHalls.find();
        return res.status(200).json(allHalls);
    }catch(err){
        return next(err);
    }
}

module.exports = {
    getCinemaHalls,
}