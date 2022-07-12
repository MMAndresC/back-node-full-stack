const express = require('express');
const { postRegister, postLogin, postLogout, putInfoUser, deleteUser, getCheckSession } = require('./users.controller');
const { isAuthenticated, isAdmin } = require('../../utils/middlewares/auth.middleware');

const UserRoutes = express.Router();

UserRoutes.post('/register', postRegister);
UserRoutes.post('/login', postLogin);
UserRoutes.post('/logout', postLogout);
UserRoutes.get('/session', getCheckSession);
UserRoutes.put('/gestion/:id',[isAuthenticated], putInfoUser); 
UserRoutes.delete('/gestion/:id',[isAdmin], deleteUser );

module.exports = UserRoutes;

