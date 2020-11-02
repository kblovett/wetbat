const { Sequelize } = require('sequelize');
const configDev = require('../config/config_dev');
const configProd = require('../config/config_prod');
const dotenv = require('dotenv');

dotenv.config();

if (process.env.NODE_ENV === 'development') {
  config = configDev;
} else if (process.env.NODE_ENV === 'production') {
  config = configProd;
}

module.exports = new Sequelize(config);
