'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Booking = db.define('Booking', {
  agent_id: DataTypes.UUID,
  traveller_id: DataTypes.INTEGER,
  passengers: DataTypes.INTEGER,
  depart_loc: DataTypes.STRING,
  depart_date: DataTypes.DATE,
  dest_loc: DataTypes.STRING,
  return_date: DataTypes.DATE,
  booking_cost: DataTypes.FLOAT,
});

module.exports = Booking;
