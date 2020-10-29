'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Travellers', {
      traveller_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fname: {
        type: Sequelize.STRING,
      },
      lname: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      address_line1: {
        type: Sequelize.STRING,
      },
      address_line2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      province_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Provinces',
          key: 'province_id',
        },
      },
      country_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
          key: 'country_id',
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
    await queryInterface.dropTable('Travellers');
  },
};
