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

Booking_Addon.hasOne(Addon, { foreignKey: 'id' });

module.exports = Booking_Addon;
