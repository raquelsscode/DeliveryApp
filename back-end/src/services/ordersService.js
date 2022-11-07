const { sales } = require('../database/models');

const getSalesById = async (userId) => {
  const getSaleId = await sales.findAll({
    where: { userId },
  });

  if (!getSaleId) return null;

  return getSaleId;
};

module.exports = {
  getSalesById,
};