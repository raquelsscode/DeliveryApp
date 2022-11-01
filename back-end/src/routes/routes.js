const express = require('express');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const checkoutController = require('../controllers/checkoutController');

const route = express.Router();

route.post('/login', userController.postLogin);
route.post('/register', userController.postRegister);
route.get('/products', productsController.postProducts);
route.post('/checkout', checkoutController.postCheckout);

module.exports = route;