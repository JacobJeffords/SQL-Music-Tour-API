'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      stage_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stage_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stage_description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },

  async down(queryInterface, Sequelize) {
  }
};
