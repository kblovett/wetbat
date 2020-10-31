'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');
// const Agent = require('./agent');
// const Booking_Addon = require('./booking_addon');

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

// Booking.belongsTo(Agent, {
//   sourceKey: 'agentUuid',
//   targetKey: 'agentUuid',
//   foreignKey: 'agentUuid',
// });

// Booking.belongsTo(Agent);
// Booking.hasOne(Agent, { targetKey: 'agent_id' });
// Booking.belongsTo(Agent);
// Booking.hasMany(Booking_Addon, { foreignKey: 'booking_id' });

module.exports = Booking;
