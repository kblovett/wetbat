'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Travellers', [
      {
        fname: 'Django',
        lname: 'Cat',
        phone: '4038504596',
        email: 'djcat@test.com',
        addressLine1: '20 Penrith Place SE',
        addressLine2: null,
        city: 'Calgary',
        provinceId: 2,
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fname: 'Tigger',
        lname: 'Cat',
        phone: '4038504596',
        email: 'ticat@test.com',
        addressLine1: '20 Penrith Place SE',
        addressLine2: null,
        city: 'Calgary',
        provinceId: 2,
        countryId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Travellers', null, {});
  },
};
