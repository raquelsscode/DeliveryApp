const jwt = require('jsonwebtoken');
require('dotenv/config');

const JWT_SECRET = process.env.JWT_SECRET || 'deliv3ry_4pP'
const JWT_OPTIONS = {
  expiresIn: '7d', 
  algorithm: 'HS256', 
};

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET, JWT_OPTIONS);
  return token;
};

const verifyToken = (token) => {
  const tokenVerify = jwt.verify(token, JWT_SECRET);
  return tokenVerify;
};
module.exports = {
  createToken,
  verifyToken,
};