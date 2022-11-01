require('dotenv').config();
const checkoutService = require('../services/checkoutService');

const postCheckout = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return next({ name: 'Unauthorized', message: 'Unauthorized' });
    }

    const product = await checkoutService.postProducts();

    if (!product) {
        return next({ name: 'NotFound', message: 'Not found' });
    }
    return res.status(200).json({ ...product });
};

module.exports = {
    postCheckout,
};
