'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Traveller extends Model {}

  Traveller.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      address_line1: DataTypes.STRING,
      address_line2: DataTypes.STRING,
      city: DataTypes.STRING,
      province_id: DataTypes.INTEGER,
      country_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Traveller',
    }
  );
  Traveller.associate = function (models) {
    Traveller.hasOne(models.Province);
    Traveller.hasOne(models.Country);
    Traveller.hasMany(models.Booking);
  };
  return Traveller;
};
