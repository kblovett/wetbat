'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Booking_Addon = db.define('Booking_Addon', {
  booking_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Bookings',
      key: 'booking_id',
    },
  },
  addon_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Addons',
      key: 'addon_id',
    },
  },
});

module.exports = Booking_Addon;
