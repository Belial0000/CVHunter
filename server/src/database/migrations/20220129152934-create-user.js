'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

     await queryInterface.createTable('Users', {
       id: {
         type: Sequelize.INTEGER,
         allowNull: false,
         autoIncrement: true,
         unique: true,
         primaryKey: true
       },
       email: {
         type: Sequelize.STRING,
         unique: true,
         allowNull: false
       },
       password: {
         type: Sequelize.STRING,
         allowNull: false
       },
       firstName: {
         type: Sequelize.STRING,
         allowNull: false
       },
       lastName: {
         type: Sequelize.STRING,
         allowNull: false
       },
       role: {
         type: Sequelize.STRING,
         defaultValue: 'USER'
       },
       birthDate: Sequelize.STRING,
       sex: Sequelize.STRING,
       photo: Sequelize.STRING,
       phoneNumber: Sequelize.STRING,
       postAdr: Sequelize.STRING,
       postIndex: Sequelize.STRING,
       city: Sequelize.STRING,
       placeOfBirth: Sequelize.STRING,
       familyStatus: Sequelize.STRING,
       citizenship: Sequelize.STRING,
       linkedIn: Sequelize.STRING,
       website: Sequelize.STRING,
       isActive: {
         type: Sequelize.BOOLEAN,
         defaultValue: true
       },
       createdAt: {
         allowNull: false,
         type: Sequelize.DATE
       },
       updatedAt: {
         allowNull: false,
         type: Sequelize.DATE
       }
     });

  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('Users');
  }
};
