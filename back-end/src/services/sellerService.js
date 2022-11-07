const { sales, products, users } = require('../database/models');

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

const updateSale = async (id, status) => {
  await sales.update({
      status,
    }, {
      where: {
    id,
  } });

  const saleUpdated = await sales.findByPk(id, {
    include: [
      { model: products, as: 'products' },
      { model: users, as: 'seller' },
    ],
  });

  if (!saleUpdated) return null;
  
  return saleUpdated;
};

module.exports = {
  getProducts,
  getProductById,
  updateSale,
};