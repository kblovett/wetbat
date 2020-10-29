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
      agent_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Agents',
          key: 'id',
        },
      },
      traveller_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Travellers',
          key: 'id',
        },
      },
      passengers: {
        type: Sequelize.INTEGER,
      },
      depart_loc: {
        type: Sequelize.STRING,
      },
      depart_date: {
        type: Sequelize.DATE,
      },
      dest_loc: {
        type: Sequelize.STRING,
      },
      return_date: {
        type: Sequelize.DATE,
      },
      booking_cost: {
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
