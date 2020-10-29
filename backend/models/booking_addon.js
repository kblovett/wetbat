'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking_Addon extends Model {}

  Booking_Addon.init(
    {
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
    },
    {
      sequelize,
      modelName: 'Booking_Addon',
    }
  );
  return Booking_Addon;
};
