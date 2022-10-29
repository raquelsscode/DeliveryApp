require('dotenv').config();
const userService = require('../services/userService');

const postLogin = async (req, res, next) => {
    const { email, password } = req.body;
    const { error } = await userService.loginValidate(req.body);

    if (error) {
      return next({ name: 'BadRequest', message: 'Some required fields are missing' });
    }
    const product = await userService.postLogin(email, password);

    if (!product) {
      return next({ name: 'NotFound', message: 'Invalid fields' });
    }
    return res.status(200).json(product);
};

module.exports = { postLogin };
