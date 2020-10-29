'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [
      {
        name: 'Canada',
        code: 'CA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'United States',
        code: 'US',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Countries', null, {});
  },
};
