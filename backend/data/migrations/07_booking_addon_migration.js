'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Booking_Addons', {
      booking_addon_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      booking_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bookings',
          key: 'booking_id',
        },
      },
      addon_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Addons',
          key: 'addon_id',
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
