'use strict';
const { DataTypes, UUID } = require('sequelize');
const db = require('../data/db');
const Booking = require('./booking');

const Agent = db.define('Agent', {
  agentUuid: DataTypes.UUID,
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});

Agent.hasMany(Booking, {
  sourceKey: 'agentUuid',
  targetKey: 'agentUuid',
  foreignKey: 'agentUuid',
});
Booking.belongsTo(Agent, {
  sourceKey: 'agentUuid',
  targetKey: 'agentUuid',
  foreignKey: 'agentUuid',
});

module.exports = Agent;
