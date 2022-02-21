'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Templates', [
      {
        description: 'Auckland',
        link: './documents/templateAuckland',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'Edinburgh',
        link: './documents/templateEdinburgh',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Princeton',
        link: './documents/templatePrinceton',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Otago',
        link: './documents/templateOtago',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Berkeley',
        link: './documents/templateBerkeley',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Harvard',
        link: './documents/templateHarvard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Stanford',
        link: './documents/templateStanford',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Cambridge',
        link: './documents/templateCambridge',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Oxford',
        link: './documents/templateOxford',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Templates', null, {
      restartIdentity: true,
      truncate: true,
      cascade: true,
    });
  }
};
