'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Traveller = db.define('Traveller', {
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  address_line1: DataTypes.STRING,
  address_line2: DataTypes.STRING,
  city: DataTypes.STRING,
  province_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Provinces',
      key: 'province_id',
    },
  },
  country_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Countries',
      key: 'country_id',
    },
  },
});

module.exports = Traveller;
