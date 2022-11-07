'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'sales',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'sale_id',
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'products',
          key: 'id'
        },
        type: Sequelize.INTEGER,
        field: 'product_id',
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales_products');
  }
}; 