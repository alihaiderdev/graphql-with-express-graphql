const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize_with_mysql', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: true, // for stopping insertion sql queries logs
  pool: { max: 5, min: 0, acquire: 30000, idle: 10000 },
});
