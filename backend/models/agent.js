'use strict';
const { DataTypes } = require('sequelize');
const db = require('../data/db');
const bcrypt = require('bcryptjs');
const { password } = require('../config/config');

const Agent = db.define(
  'Agent',
  {
    fname: DataTypes.STRING,
    lname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  },
  {
    // hooks: {
    //   beforeCreate: (user) => {
    //     const salt = bcrypt.genSaltSync();
    //     user.password = bcrypt.hashSync(user.password, salt);
    //   },
    // },
    // instanceMethods: {
    //   matchPassword: function (password) {
    //     return bcrypt.compareSync(password, this.password);
    //   },
    // },
  }
);

// Agent.matchPassword = async function (enteredPassword) {
//   console.log(enteredPassword, this.password());
//   // return await bcrypt.compare(enteredPassword, this.getDataValue(password));
// };

module.exports = Agent;
