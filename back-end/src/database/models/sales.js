const SalesModel = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    sellerId: {
      allowNull: false,
      foreignKey: true,
      type: DataTypes.INTEGER,
    },
    totalPrice: DataTypes.DECIMAL(9, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING
  },
    {
      timestamps: false,
      tableName: 'sales',
      underscored: true,
    });

  sales.associate = (models) => {
    models.sales.belongsTo(models.users, { foreignKey: 'userId', as: 'customer', })
    models.sales.belongsTo(models.users, { foreignKey: 'sellerId', as: 'seller', })
  }

  return sales;
};

module.exports = SalesModel;