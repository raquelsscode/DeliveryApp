'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'user_id',
      },
      sellerId: {
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'seller_id',
      },
      totalPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price',
      },
      deliveryAddress: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address',
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number',
      },
      saleDate: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'sale_date',
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
}; 