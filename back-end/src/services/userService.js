const { users } = require('../database/models');

const postLogin = async (email, password) => {
    const getusers = await users.findOne({
        where: {
            email,
            password,
        },
    });
    return getusers;
};

module.exports = { 
    postLogin,
};