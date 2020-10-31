'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      agentUuid: {
        type: Sequelize.UUID,
        references: {
          model: 'Agents',
          key: 'agentUuid',
        },
      },
      travellerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Travellers',
          key: 'id',
        },
      },
      passengers: {
        type: Sequelize.INTEGER,
      },
      departLoc: {
        type: Sequelize.STRING,
      },
      departDate: {
        type: Sequelize.DATE,
      },
      destLoc: {
        type: Sequelize.STRING,
      },
      returnDate: {
        type: Sequelize.DATE,
      },
      bookingCost: {
        type: Sequelize.FLOAT,
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
    await queryInterface.dropTable('Bookings');
  },
};
