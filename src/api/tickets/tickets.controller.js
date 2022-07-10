const Tickets = require('./tickets.model');

const postNewTicket = async (req, res, next) => {
    try{
        const newTicket = new Tickets(req.body);
        const insertTicketDb = await newTicket.save();
        return res.status(201).json(insertTicketDb);
    }
    catch(err){
        return next(err);
    }
}

const getTicketsByClient = async (req, res, next) => {
    try{
        const { id } = req.params;
        const tickets = await Tickets.find({email: id}).sort({date:1});
        return res.status(201).json(tickets);
    }catch(err){
        return next(err);
    }
}

module.exports = {
    postNewTicket,
    getTicketsByClient,
}

