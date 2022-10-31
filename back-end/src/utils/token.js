const jwt = require('jsonwebtoken');
require('dotenv/config');

const { JWT_SECRET } = process.env;
// const JWT_OPTIONS = {
//   algorithm: 'HS256', 
//   expiresIn: '1d', 
// };

const createToken = (payload) => {
  const token = jwt.sign(payload, JWT_SECRET);
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