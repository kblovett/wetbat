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
      province_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Provinces',
          key: 'province_id',
        },
      },
      country_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Countries',
          key: 'country_id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Traveller',
    }
  );
  return Traveller;
};
