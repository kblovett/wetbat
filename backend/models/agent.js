'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');

const Agent = db.define('Agent', {
  fname: DataTypes.STRING,
  lname: DataTypes.STRING,
  phone: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});

// Agent.matchPassword = async function (enteredPassword) {
//   console.log(enteredPassword, this.password());
//   // return await bcrypt.compare(enteredPassword, this.getDataValue(password));
// };

module.exports = Agent;
