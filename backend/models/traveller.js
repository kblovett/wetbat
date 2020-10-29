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
    Traveller.hasOne(models.Province, models.Country);
    Traveller.hasMany(models.Booking);
  };
  return Traveller;
};

// npx sequelize model:generate --name Traveller --attributes fname:string,lname:string,phone:string,email:string,address_line1:string,address_line2:string,city:string,province_id:integer,country_id:integer
