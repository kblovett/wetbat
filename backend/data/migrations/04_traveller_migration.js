'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Travellers', {
      id: {
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
      addressLine1: {
        type: Sequelize.STRING,
      },
      addressLine2: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      provinceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Provinces',
          key: 'id',
        },
      },
      countryId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Countries',
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
    await queryInterface.dropTable('Travellers');
  },
};
