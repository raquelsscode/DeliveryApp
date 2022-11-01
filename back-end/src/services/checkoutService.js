const { products, sales, salesProducts } = require('../database/models');

const postCheckout = async () => {
    const getproducts = await products.findAll();
    return getproducts;
  };

  module.exports = {
    postCheckout,
};
