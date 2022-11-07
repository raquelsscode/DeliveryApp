const { sales } = require('../database/models');

const getProducts = async () => {
  const getTenProducts = await sales.findAll({
    limit: 10,
  });
  if (!getProducts) return null;
  return getTenProducts;
};

const getProductById = async (id) => {
  const getProduct = await sales.findOne({
    where: { id },
  });
  if (!getProduct) return null;
  return getProduct;
};

module.exports = {
  getProducts,
  getProductById,
};