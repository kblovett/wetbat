'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Country extends Model {}

  Country.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Country',
    }
  );
  Country.assoiciate = function (models) {
    Country.belongsTo(models.Traveller);
  };
  return Country;
};
