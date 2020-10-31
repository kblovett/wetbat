'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Booking_Addons', [
      {
        bookingId: 1,
        addonId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        bookingId: 1,
        addonId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Booking_Addons', null, {});
  },
};
