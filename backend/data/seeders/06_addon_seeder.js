'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Addons', [
      {
        description: 'Car Rental',
        cost: 199.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Hotel',
        cost: 1999.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addons', null, {});
  },
};
