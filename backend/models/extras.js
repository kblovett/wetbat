'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Extras extends Model {}
  Extras.init(
    {
      description: DataTypes.STRING,
      cost: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Extras',
    }
  );
  Extras.associate = function (models) {
    Extras.belongsTo(models.Booking_Extras);
  };
  return Extras;
};
