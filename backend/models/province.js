'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Province extends Model {}

  Province.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Province',
    }
  );
  return Province;
};
