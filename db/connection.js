const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "user_db",
  "root",
  "yourRootPassword",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
