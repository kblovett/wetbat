'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');
const Booking = require('./booking');

const Traveller = db.define('Traveller', {
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  addressLine1: DataTypes.STRING,
  addressLine2: DataTypes.STRING,
  city: DataTypes.STRING,
  provinceId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Provinces',
      key: 'id',
    },
  },
  countryId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Countries',
      key: 'id',
    },
  },
});

Traveller.hasMany(Booking, {
  // sourceKey: 'agentUuid',
  targetKey: 'travellerId',
  foreignKey: 'travellerId',
});
Booking.belongsTo(Traveller, {
  sourceKey: 'travellerId',
  // targetKey: 'travellerId',
  foreignKey: 'travellerId',
});

module.exports = Traveller;
