const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  "buzy_bees",
  "root",
  "yourRootPassword",
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;

