'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');
const Booking_Addon = require('./booking_addon');

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

Booking.hasMany(Booking_Addon, {
  // sourceKey: 'agentUuid',
  targetKey: 'bookingId',
  foreignKey: 'bookingId',
});
Booking_Addon.belongsTo(Booking, {
  sourceKey: 'bookingId',
  // targetKey: 'agentUuid',
  foreignKey: 'bookingId',
});

module.exports = Booking;
