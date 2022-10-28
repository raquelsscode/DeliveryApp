require('dotenv').config();
const userService = require('../services/userService');

const postLogin = async (req, res) => {
    const { email, password } = req.body
    const product = await userService.postLogin(email, password);
    if (!product) {
      return res.status(400).json({ message: 'Error' });
    }
    return res.status(200).json(product);
}

module.exports = { postLogin }

