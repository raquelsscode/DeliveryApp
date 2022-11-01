const Joi = require('joi');
const md5 = require('md5');
const { users } = require('../database/models');
const runSchema = require('../utils/runSchema');
const { createToken } = require('../utils/token');

const MESSAGE_ERROR_LOGIN = 'Some required fields are missing';

const loginValidate = runSchema(Joi.object({ 
  email: Joi.string().email().required().messages({
    'string.email': MESSAGE_ERROR_LOGIN,
    'string.base': MESSAGE_ERROR_LOGIN,
    'string.empty': MESSAGE_ERROR_LOGIN,
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': MESSAGE_ERROR_LOGIN,
    'string.empty': MESSAGE_ERROR_LOGIN,
  }),
}));

const registerValidate = runSchema(Joi.object({ 
  email: Joi.string().email().required().messages({
    'string.email': MESSAGE_ERROR_LOGIN,
    'string.base': MESSAGE_ERROR_LOGIN,
    'string.empty': MESSAGE_ERROR_LOGIN,
  }),
  password: Joi.string().min(6).required().messages({
    'string.base': MESSAGE_ERROR_LOGIN,
    'string.empty': MESSAGE_ERROR_LOGIN,
  }),
  name: Joi.string().min(12).required(),
}));

const postLogin = async (email, password) => {
  const hashPassword = md5(password);
  
  const getusers = await users.findOne({
    where: {
      email,
      password: hashPassword,
    },
  });
  
  if (!getusers) {
    return null;
  }
  const token = createToken({ email: getusers.email });
  return { ...getusers.dataValues, token };
};

const postRegister = async (name, email, password) => {
  const hashPassword = md5(password);

  const getUser = await users.findOne({
    where: {
      email,
      password: hashPassword,
    },
  });
  if (getUser) {
    return null; 
  }
  
  const createdUser = await users.create({ name, email, password: hashPassword, role: 'customer' });

  const token = createToken({ email: createdUser.email });
  return { name, email, role: createdUser.role, token };
};

module.exports = { 
  loginValidate,
  postLogin,
  registerValidate,
  postRegister,
};