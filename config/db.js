const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_with_mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  //   logging: true, // for stopping insertion sql queries logs
  //   OR
  logging: console.log,
});

sequelize
  .authenticate()
  .then(() => console.log('Connected to MYSQL DB'))
  .catch((error) => console.log('Error : ', error));

module.exports = sequelize;
