require('dotenv').config();
const checkoutService = require('../services/checkoutService');
const token = require('../utils/token');

const getSales = async (req, res, next) => {
    const getAllSales = await checkoutService.getAllSale();

    if (!getAllSales) {
        return next({ name: 'Internal Server Error', message: 'Internal Server Error' });
    }

    return res.status(200).json(getAllSales);
};

const getSalesById = async (req, res) => {
    const { id } = req.params;
    const getSale = await checkoutService.getSaleById(id);
    return res.status(200).json(getSale);
};

const postCheckout = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return next({ name: 'NotFound', message: 'Not found' });
    }
    
    const verifiedToken = token.verifyToken(authorization);
    const verifiedEmail = verifiedToken.email;

    const result = await checkoutService.createSaleProducts({ ...req.body, verifiedEmail });

    if (!result) {
        return next({ name: 'NotFound', message: 'Not found' });
    }
    return res.status(201).json({ result });
};

module.exports = { postCheckout, getSales, getSalesById };
