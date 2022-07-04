const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const db_url = process.env.DB_URL;

if(!db_url){
    throw new Error(`Error!!, database doesn't exist`);
}

const connectDb = async() => {
    try{
        const db = await mongoose.connect(db_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const { name, host } = db.connection;
        console.log(`Connected with database ${name} in host ${host}`);
    }catch(err){
        console.log("Error, failed to connect with database", err);
    }
}

module.exports = { connectDb };