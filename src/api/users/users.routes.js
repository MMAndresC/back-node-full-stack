const express = require('express');
const { postRegister, postLogin, postLogout, putInfoUser, deleteUser, getCheckSession } = require('./users.controller');
const { isAuthenticated } = require('../../utils/middlewares/auth.middleware');

const UserRoutes = express.Router();

UserRoutes.post('/register', postRegister);
UserRoutes.post('/login', postLogin);
UserRoutes.post('/logout', postLogout);
UserRoutes.get('/session', getCheckSession);
//UserRoutes.get('/gestion', [isAuthenticated],);
UserRoutes.put('/gestion/:id', putInfoUser); //,[isAuthenticated]
UserRoutes.delete('/gestion/:id',[isAuthenticated], deleteUser );

module.exports = UserRoutes;

