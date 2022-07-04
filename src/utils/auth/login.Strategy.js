const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../../api/users/users.model');
const { validateEmail, validatePassword } = require('../validators/validators');


const loginStrategy = new LocalStrategy(
    {
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },
    async(req, email, password, done) => {

        //validar formato del mail y contraseña
        const formatEmail = validateEmail(email);
        const formatPassword = validatePassword(password);
        if(!formatEmail || !formatPassword){
            const err = new Error('Error!, wrong format email or password');
            err.status = 400;
            return done(err);
        }

        const user = await User.findOne({email: email.toLowerCase()});
        //Si no existe el usuario mirar de
        if(!user){
            const err = new Error('Failed to login, error in mail or password');
            err.status = 401;
            return done(err);
        }

        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if(!isCorrectPassword) {
            const err = new Error('Failed to login, error in mail or password');
            err.status = 401;
            return done(err);
        }
        user.password = null;
        return done(null, user);
    }
);

module.exports = loginStrategy;