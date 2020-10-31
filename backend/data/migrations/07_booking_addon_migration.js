'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking_Addons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bookingId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bookings',
          key: 'id',
        },
      },
      addonId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addons',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Booking_Addons');
  },
};
