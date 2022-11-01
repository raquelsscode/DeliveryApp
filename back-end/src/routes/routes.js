const express = require('express');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');

const route = express.Router();

route.post('/login', userController.postLogin);
route.post('/register', userController.postRegister);
route.get('/products', productsController.postProducts);
route.post('/checkout', productsController.postCheckout);

module.exports = route;