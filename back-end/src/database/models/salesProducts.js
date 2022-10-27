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
        // otherKey:   
      
      })
  }

  salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sales,
      { foreignKey: 'productId' })
  }

  return salesProducts;
};

module.exports = salesProductsModel;