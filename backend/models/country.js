'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Country = db.define('Country', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
});

module.exports = Country;
