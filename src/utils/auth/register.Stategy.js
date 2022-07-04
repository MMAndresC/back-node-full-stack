const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../../api/users/users.model');
const { validateEmail, validatePassword } = require('../validators/validators');

const saltRounds = 10;

const registerStrategy = new LocalStrategy(
    {
        usernameField: 'email', ///????????????????
        passwordField: 'password',
        passReqToCallback: true //Para habilitar poder recuperar mas campos del modelo
    },
    async(req, email, password, done) => {
        
        try{
            const alreadyUser = await User.findOne({ email: email.toLowerCase() }); 
            if(alreadyUser){
                const err = new Error('Error!, failed to register');
                err.status = 400;
                return done(err, null);
            }

            //Controlar el formato del mail y el password, el password tiene que ser 8 caracteres min, una mayuscula, caracter especial y numero
            const formatEmail = validateEmail(email);
            const formatPassword = validatePassword(password);
            if(!formatEmail || !formatPassword){
                const err = new Error('Failed attempt to register, wrong format email or password');
                err.status = 400;
                return done(err, null);
            }

            const hash = await bcrypt.hash(password, saltRounds);
            const user = new User({ ...req.body, email, password: hash, role: 'user'}); 
            const newUser = await user.save();
            newUser.password = 'No show password'; //No se devuelve el password del usuario por seguridad
            return done(null, newUser);

        }catch(err){
            return done(err, null);
        }
    }
);

module.exports = registerStrategy;