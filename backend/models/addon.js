'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Addon = db.define('Addon', {
  description: DataTypes.STRING,
  cost: DataTypes.FLOAT,
});

module.exports = Addon;
