module.exports = (sequelize, DataTypes, Model) => {
  class User extends Model {}

  User.init(
    {
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "doctor",
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      }
    },
    {
      sequelize, 
      paranoid: true,
      deletedAt: 'softDelete',
      modelName: "User", 
      tableName: "users",
    }
  );

  return User;
};
