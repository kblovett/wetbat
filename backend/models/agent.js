'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Agent extends Model {}

  Agent.init(
    {
      fname: DataTypes.STRING,
      lname: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Agent',
    }
  );
  return Agent;
};
