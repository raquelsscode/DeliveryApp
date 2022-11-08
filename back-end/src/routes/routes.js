const express = require('express');
const userController = require('../controllers/userController');
const productsController = require('../controllers/productsController');
const checkoutController = require('../controllers/checkoutController');
const ordersController = require('../controllers/ordersController');
const sellerController = require('../controllers/sellerController');

const route = express.Router();

route.post('/login', userController.postLogin);
route.post('/register', userController.postRegister);

route.get('/customer/products', productsController.postProducts);
route.get('/customer/orders', ordersController.getUser);
route.post('/customer/checkout', checkoutController.postCheckout);

route.get('/sales', checkoutController.getSales);
route.get('/sales/:id', checkoutController.getSalesById);

route.get('/sellers', userController.getSellers);
route.get('/seller/orders', sellerController.getProducts);
route.get('/seller/orders/:id', sellerController.getProductById);
route.patch('/seller/orders/:id', sellerController.saleUpdated);

module.exports = route;