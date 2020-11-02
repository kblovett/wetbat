'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');
const Booking_Addon = require('./booking_addon');
const Addon = require('./addon');

const Booking = db.define('Booking', {
  agentUuid: {
    type: DataTypes.UUID,
    references: {
      model: 'Agents',
      key: 'agentUuid',
    },
  },
  travellerId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Travellers',
      key: 'id',
    },
  },
  passengers: DataTypes.INTEGER,
  departLoc: DataTypes.STRING,
  departDate: DataTypes.DATE,
  destLoc: DataTypes.STRING,
  returnDate: DataTypes.DATE,
  bookingCost: DataTypes.FLOAT,
});

Booking.belongsToMany(Addon, {
  through: Booking_Addon,
  // targetKey: 'bookingId',
  // sourceKey: 'bookingId',
  foreignKey: 'bookingId',
  otherKey: 'addonId',
});
// Addon.belongsTo(Booking, {
//   through: Booking_Addon,
//   sourceKey: 'bookingId',
//   foreignKey: 'bookingId',
// });

module.exports = Booking;
