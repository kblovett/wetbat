'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Travellers', [
      {
        fname: 'Django',
        lname: 'Cat',
        phone: '4038504596',
        email: 'djcat@test.com',
        address_line1: '20 Penrith Place SE',
        address_line2: null,
        city: 'Calgary',
        province_id: 29,
        country_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Travellers', null, {});
  },
};
