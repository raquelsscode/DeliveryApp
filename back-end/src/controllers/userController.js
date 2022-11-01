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
      return next({ name: 'NotFound', message: 'Not found' });
    }
    return res.status(200).json({ ...product });
};

const postRegister = async (req, res, next) => {
  const { name, email, password } = req.body;
  const { error } = await userService.registerValidate({ name, email, password });

  if (error) {
    return next({ name: 'BadRequest', message: 'Some required fields are missing' });
  }

  const createdRegister = await userService.postRegister(name, email, password);
  if (!createdRegister) {
    return next({ name: 'Conflict', message: 'Conflict' });
  }

  return res.status(201).json({ ...createdRegister });
};

module.exports = { postLogin, postRegister };
