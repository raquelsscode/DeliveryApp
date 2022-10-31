const express = require('express');
const userController = require('../controllers/userController');

const route = express.Router();

route.post('/login', userController.postLogin);
route.post('/register', userController.postRegister);

module.exports = route;