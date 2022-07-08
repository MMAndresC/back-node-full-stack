const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, trim: true },
        password: { type: String, required: true, trim: true },
        name: { type: String, required: true },
        /* surname: { type: String, required: true },
        adress: { type: String, required: true },
        zip: { type: Number, required: true },
        city: { type: String, required: true }, */
        phone: { type: Number, required: true }, 
        role: { type: String, enum: ['user', 'admin'], default: 'user', required: true },
    },
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;