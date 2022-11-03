const UserModel = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  },
    {
      timestamps: false,
      tableName: 'users',
      undescored: false
    });

  users.associate = (models) => {
    users.hasMany(models.sales,
      {
        foreignKey: 'userId',
        as: 'userId',
      })
    users.hasMany(models.sales,
      {
        foreignKey: 'sellerId',
        as: 'sellerId',
      })
  }

  return users;
};

module.exports = UserModel;