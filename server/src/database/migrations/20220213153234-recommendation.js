'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Recommendations', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true
      },
      resumeId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Resumes',
          key: 'id'
        },
        onDelete: 'cascade'
      },
      namecompany: {
        type: Sequelize.TEXT
      },
      contactperson: {
        type: Sequelize.TEXT
      },
      number: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Recommendations');
  }
};