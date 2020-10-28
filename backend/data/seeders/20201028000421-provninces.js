'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Provinces', [
      {
        name: 'British Columbia',
        code: 'BC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Alberta',
        code: 'AB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Saskatchewan',
        code: 'SK',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Manitoba',
        code: 'MB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Ontario',
        code: 'ON',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Quebec',
        code: 'QC',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Newfoundland and Labrador',
        code: 'NL',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Prince Edward Island',
        code: 'PE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nova Scotia',
        code: 'NS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'New Brunswick',
        code: 'NB',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Yukon',
        code: 'YT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Northwest Territories',
        code: 'NT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Nunavut',
        code: 'NU',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Provinces', null, {});
  },
};
