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
      tableName: 'salesProducts',
      undescored: false
  }
  );


  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.products,
      { 
        foreignKey: 'saleId',
        //otherKey: 
        through: salesProducts,
        as: 'sale'
      })
  }

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales,
      { 
        foreignKey: 'productId',
        through: salesProducts,
        as: 'productId',
      })
  }

  return salesProducts;
};

module.exports = salesProductsModel; 