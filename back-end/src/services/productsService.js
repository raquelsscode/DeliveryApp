const { products } = require('../database/models');

const postProducts = async () => {
    const getproducts = await products.findAll();
    return getproducts;
  };

  module.exports = {
    postProducts,
};
