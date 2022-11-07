const express = require('express');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const checkoutController = require('../controllers/checkoutController');

const route = express.Router();

route.post('/login', userController.postLogin);
route.post('/register', userController.postRegister);
route.get('/customer/products', productsController.postProducts);
route.post('/customer/checkout', checkoutController.postCheckout);
route.get('/sellers', userController.getSellers);

module.exports = route;