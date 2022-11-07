const salesProductsModel = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    saleId: {
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    quantity: DataTypes.INTEGER
  },
  {
    
      timestamps: false,
      tableName: 'sales_products',
      underscored: true,
  }
  );


  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return salesProducts;
};

module.exports = salesProductsModel; 