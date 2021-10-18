module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
  });
  return Users;
};
