const { sales } = require('../database/models');

const getProducts = async () => {
  const getTenProducts = await sales.findAll({
    limit: 10,
  });
  if (!getProducts) return null;
  return getTenProducts;
};

module.exports = {
  getProducts,
};