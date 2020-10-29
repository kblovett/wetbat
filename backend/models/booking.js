'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {}

  Booking.init(
    {
      agent_id: DataTypes.UUID,
      traveller_id: DataTypes.INTEGER,
      passengers: DataTypes.INTEGER,
      depart_loc: DataTypes.STRING,
      depart_date: DataTypes.DATE,
      dest_loc: DataTypes.STRING,
      return_date: DataTypes.DATE,
      booking_cost: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Booking',
    }
  );
  return Booking;
};
