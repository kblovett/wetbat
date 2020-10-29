'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        agent_id: '7414e4db-afc2-44a9-b1fe-84544d6ede4a',
        traveller_id: 1,
        passengers: 0,
        depart_loc: 'Calgary, AB',
        depart_date: '2020-10-30',
        dest_loc: 'Montreal, QC',
        return_date: '2020-11-30',
        booking_cost: 389.99,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Bookings', null, {});
  },
};
