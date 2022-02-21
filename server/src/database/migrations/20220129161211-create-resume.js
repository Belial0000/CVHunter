'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.createTable('Resumes', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      templateId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Templates',
          key: 'id'
        }
      },
      title: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Resumes');
  }
};
