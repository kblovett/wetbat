'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Addon extends Model {}

  Addon.init(
    {
      description: DataTypes.STRING,
      cost: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: 'Addon',
    }
  );
  return Addon;
};
