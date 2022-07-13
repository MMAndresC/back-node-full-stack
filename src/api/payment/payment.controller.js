

require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);



const checkoutSession = async (req, res, next) => {
    
    const { ticket, token } = req.body;
    
    if(!Object.keys(token) || !ticket){
        return res.status(500).json('Parameters dont found');
    }
    try{
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        }).catch(err =>{
            console.log(err);
        })

        if(!customer){
            return res.status(500).json('Customer was not created');
        }
        const randomKey = new Date();
        const invoiceId = `${token.email}-${randomKey}-${ticket.date}-${ticket.hour}`;  
        const invoice = await stripe.charges.create({
            amount: ticket.price * 100,
            currency: 'EUR',
            customer: customer.id,
            receipt_email: token.email,
            description: `${ticket.movie} sesion ${ticket.date}-${ticket.hour}`

        }, {idempotencyKey: invoiceId}).catch(err =>{
            console.log(err);
        })
        if(!invoice){
            return res.status(500).json('Invoice creation failed');
        }

        return res.status(200).json('Purchased');

    }catch(err){
        return res.status(500).json(err);
    }
   
  
}

module.exports = {
    checkoutSession,
}
