const Sequelize = require('sequelize');
const { sales, salesProducts, users } = require('../database/models');

const postSaleProducts = async ({ products, saleId }, multTransactions) => {
    const createdAllProducts = [];

    products.forEach((product) =>
        createdAllProducts.push(
            {
                productId: product.id,
                saleId,
                quantity: product.quantity,
            },
        ));

    await salesProducts.bulkCreate(createdAllProducts, { transaction: multTransactions });
};

const findUserId = async (email) => {
   const { dataValues } = await users.findOne({ where: { email } });
   return dataValues.id;
}; 

const postCheckoutSales = async (
    { sellerId, totalPrice, deliveryAddress, deliveryNumber, email }, multTransactions) => {
    const userId = await findUserId(email);

     const result = await sales.create(
        {
            userId,
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber,
        }, { transaction: multTransactions },
    );
    return result;
};

// https://sequelize.org/docs/v6/other-topics/transactions/

const createSaleProducts = async ({ sellerId, totalPrice, deliveryAddress,
    deliveryNumber, products, email }) => {
    // First, we start a transaction from your connection and save it into a variable
    const transaction = await Sequelize.transaction();

    try {
        // // Then, we do some calls passing this transaction as an option:
        const getSales = await postCheckoutSales({
            email,
            sellerId,
            totalPrice,
            deliveryAddress,
            deliveryNumber,
        }, transaction);

        await postSaleProducts({ products, saleId: getSales.id }, transaction);

        // If the execution reaches this line, no errors were thrown.
        // We commit the transaction.
        await transaction.commit();
        return getSales.id;
    } catch (error) {
        // If the execution reaches this line, an error was thrown.
        // We rollback the transaction.
        await transaction.rollback();
        return null;
    }
};

module.exports = { createSaleProducts };
