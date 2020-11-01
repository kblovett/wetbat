'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');
const Addon = require('./addon');

const Booking_Addon = db.define('Booking_Addon', {
  bookingId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Bookings',
      key: 'id',
    },
  },
  addonId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Addons',
      key: 'id',
    },
  },
});

Booking_Addon.hasOne(Addon, {
  // sourceKey: 'agentUuid',
  targetKey: 'addonId',
  foreignKey: 'addonId',
});
Addon.belongsTo(Booking_Addon, {
  sourceKey: 'addonId',
  // targetKey: 'agentUuid',
  foreignKey: 'addonId',
});

module.exports = Booking_Addon;
