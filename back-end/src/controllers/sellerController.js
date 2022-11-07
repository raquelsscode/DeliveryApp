const sellerService = require('../services/sellerService');

const getProducts = async (req, res, next) => {
  const getTenProducts = await sellerService.getProducts();

  if (!getTenProducts) {
    return next({ name: 'NotFound', message: 'Not found' });
  }

  return res.status(200).json(getTenProducts);
};

module.exports = {
  getProducts,
};