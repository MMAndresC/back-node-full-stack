const passport = require('passport');
const User = require('../../api/users/users.model');

const loginStrategy = require('./login.Strategy');
const registerStrategy = require('./register.Stategy');

passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser( async(userId, done) => {
    try{
        const alreadyUser = await User.findById(userId);
        return done(null, alreadyUser);
    }catch(err){
        return done(err);
    }
});
 
passport.use('register', registerStrategy);
passport.use('login', loginStrategy);