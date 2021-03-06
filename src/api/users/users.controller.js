const bcrypt = require('bcrypt');
const passport = require('passport');

const User = require('./users.model');

const saltRounds = 10;

const postRegister = (req, res, next) => {

    const { email, password } = req.body;

    //Se tiene que controlar en el front que pongan las dos cosas, es otra comprobacion para estar mas seguro
    if (!email || !password) {
        const err = new Error('Error in email or password');
        err.status = 400;
        return next(err);
    }

    const done = (err, user) => {
        if (err) {
            return next(err);
        }

        //Se loguea al usuario
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(201).json(user);
        });
    };
    passport.authenticate('register', done)(req);
};

const postLogin = (req, res, next) => {

    const done = (err, user) => {
        if (err) {
            return next(err);
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            return res.status(201).json(user);
        });
    };
    passport.authenticate('login', done)(req);
};

const postLogout = async (req, res, next) => {
    if (req.user) {
        await req.logout(() => {
            req.session.destroy(() => {
                res.clearCookie('connect.sid');
                return res.status(200).json('See you!');
            })
        });
    } else {
        return res.sendStatus(304);
    }
};

const putInfoUser = async (req, res, next) => {

    try {
        const { id } = req.params;
        const newInfo = new User(req.body);
        newInfo._id = id;
        newInfo.role = 'user';
        if(newInfo.password){
            const hash = await bcrypt.hash(newInfo.password, saltRounds);
            newInfo.password = hash;
        }
        const updatedInfo = await User.findByIdAndUpdate(id, newInfo);
        if (!updatedInfo) {
            const err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        return res.status(200).json(updatedInfo);
    } catch (err) {
        return next(err);
    }
}

const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const userToDelete = await User.findByIdAndDelete(id);
        if (!userToDelete) {
            const err = new Error('User not found');
            err.status = 404;
            return next(err);
        }
        //Hay que destruir la cookie, llamar al logout
        return res.status(200).json(userToDelete);
    } catch (err) {
        return next(err);
    }
}

const getCheckSession = async (req, res, next) => {
    if (!req.user) {
        return res.status(401).json('User not found');
    }
    let registeredUser = req.user;
    registeredUser.password = null;
    return res.status(200).json(registeredUser);
}


module.exports = {
    postRegister,
    postLogin,
    postLogout,
    deleteUser,
    putInfoUser,
    getCheckSession
}