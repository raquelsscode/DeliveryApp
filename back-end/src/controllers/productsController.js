require('dotenv').config();
const productsService = require('../services/productsService');

const postProducts = async (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return next({ name: 'Unauthorized', message: 'Unauthorized' });
    }

    const product = await productsService.postProducts();

    if (!product) {
        return next({ name: 'NotFound', message: 'Not found' });
    }
    return res.status(200).json({ ...product });
};

module.exports = {
    postProducts,
};
