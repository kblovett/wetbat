'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        agentUuid: '7414e4db-afc2-44a9-b1fe-84544d6ede4a',
        travellerId: 1,
        passengers: 0,
        departLoc: 'Calgary, AB',
        departDate: '2020-10-01 18:00:00',
        destLoc: 'Montreal, QC',
        returnDate: '2020-11-15 18:00:00',
        bookingCost: 389.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        agentUuid: '7414e4db-afc2-44a9-b1fe-84544d6ede4a',
        travellerId: 2,
        passengers: 3,
        departLoc: 'Calgary, AB',
        departDate: '2020-11-01 18:00:00',
        destLoc: 'Toronto, ON',
        returnDate: '2020-11-15 18:00:00',
        bookingCost: 389.99 * 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});
  },
};
