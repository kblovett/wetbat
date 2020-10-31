'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        agentUuid: '7414e4db-afc2-44a9-b1fe-84544d6ede4a',
        travellerId: 1,
        passengers: 0,
        departLoc: 'Calgary, AB',
        departDate: '2020-10-30',
        destLoc: 'Montreal, QC',
        returnDate: '2020-11-30',
        bookingCost: 389.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});
  },
};
