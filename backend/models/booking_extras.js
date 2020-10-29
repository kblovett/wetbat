'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking_Extras extends Model {}
  Booking_Extras.init(
    {
      booking_id: DataTypes.INTEGER,
      extra_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Booking_Extras',
    }
  );
  Booking_Extras.associate = function (models) {
    Booking_Extras.hasOne(models.booking_id, models.extra_id);
  };
  return Booking_Extras;
};
