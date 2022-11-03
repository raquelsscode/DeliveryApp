require('dotenv').config();
const checkoutService = require('../services/checkoutService');
const token = require('../utils/token');

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

module.exports = { postCheckout };
