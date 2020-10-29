'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Bookings', [
      {
        agent_id: '61e20a4a-f6f8-4ec5-927d-a5fe833c7187',
        traveller_id: 2,
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
