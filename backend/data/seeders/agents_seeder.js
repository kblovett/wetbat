'use strict';
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Agents', [
      {
        agent_id: uuidv4(),
        fname: 'Kolin',
        lname: 'Lovett',
        phone: '4038504596',
        email: 'kolin@test.com',
        password: bcrypt.hashSync('devpass', 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Agents', null, {});
  },
};
