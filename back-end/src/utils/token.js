const jwt = require('jsonwebtoken');
const fs = require('fs');
require('dotenv/config');
const fs = require('fs');


const JWT_SECRET = process.env.JWT_SECRET || fs.readFileSync('./jwt.evaluation.key', { 
  encoding: 'utf-8',
});

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