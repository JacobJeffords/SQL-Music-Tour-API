'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      meet_greet_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      event_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true
      },
      band_id: {
        type: DataTypes.STRING,
        allowNull: false
      },
      meet_start_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
      meet_end_time: {
        type: DataTypes.DATE,
        allowNull: false
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};
