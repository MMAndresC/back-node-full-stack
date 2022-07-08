

const isAuthenticated = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    return res.status(401).json('Sign in to access');
}

const isAdmin = (req, res, next) => {
    if(req.isAuthenticated()){
        if(req.user.role === 'admin'){
            return next();
        }
    }
    return res.status(401).json('Forbidden');
}

module.exports = {
    isAuthenticated,
    isAdmin
}