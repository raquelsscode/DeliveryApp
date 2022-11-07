const userService = require('../services/userService');
const ordersService = require('../services/ordersService');

const getUser = async (req, res, next) => {
  const { email } = req.query;
  const getUserId = await userService.getUserById(email);
  const getOrders = await ordersService.getSalesById(getUserId);
  if (!getOrders) {
    return next({ name: 'NotFound', message: 'Not found' });
  }
  return res.status(200).json(getOrders);
};

module.exports = {
  getUser,
};