const ProductsModel = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING
  },
  {
    
      timestamps: true,
      tableName: 'products',
      undescored: false
  }
  );

  products.associate = (models) => {
    products.hasMany(models.salesProducts,
      { foreignKey: 'productId',
        as: 'product',
      })
  }

  return products;
};

module.exports = ProductsModel; 