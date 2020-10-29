'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Booking_Addons', [
      {
        booking_id: 1,
        addon_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        booking_id: 1,
        addon_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Booking_Addons', null, {});
  },
};
