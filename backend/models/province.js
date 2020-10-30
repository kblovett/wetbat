'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Province = db.define('Province', {
  name: DataTypes.STRING,
  code: DataTypes.STRING,
});

module.exports = Province;
