const express = require('express');
const { postRegister, postLogin, postLogout, putInfoUser, deleteUser, getCheckSession } = require('./users.controller');
const { isAuthenticated } = require('../../utils/middlewares/auth.middleware');

const UserRoutes = express.Router();

UserRoutes.post('/register', postRegister);
UserRoutes.post('/login', postLogin);
UserRoutes.post('/logout', postLogout);
UserRoutes.get('/gestion', [isAuthenticated], getCheckSession);
UserRoutes.put('/gestion/:id', putInfoUser);
UserRoutes.delete('/gestion/:id', deleteUser);

module.exports = UserRoutes;

