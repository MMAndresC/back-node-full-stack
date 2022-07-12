const Screenings = require('./screenings.model');

const putEditScreening = async (req, res, next) => {
    
    try {
        const {id} = req.params;
        const editedScreening = new Screenings(req.body);
        editedScreening._id = id;
        const editScreeningDb = await Screenings.findByIdAndUpdate(id, editedScreening);
        console.log('back',editedScreening);
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

const updateSeatsById =  async (req, res, next) => {
    try{
        const { id } = req.params;
        const updated = await Screenings.updateOne({_id: id},{$push:{takenSeat:req.body}});
        return res.status(201).json(updated);
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
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        if(day < 10){
            day ='0'+ day;
        }
        if(month < 10){
            month ='0'+ month;
        }
        today = `${day}/${month}/${year}`;
    
        const { id } = req.params;
        const screeningsMovie = await Screenings.find({idMovie: id, date: { $gt: today }}).populate('idHall').sort({date:1, hour:1});
                                                    
        return res.status(201).json(screeningsMovie);
    }catch(err){
        return next(err);
    }
}

module.exports = {
    postNewScreening,
    getScreeningByMovie,
    putEditScreening,
    updateSeatsById
}