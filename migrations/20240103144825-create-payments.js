"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    await queryInterface.createTable("Payments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize.INTEGER,
      },
      paymentType: {
        type: sequelize.ENUM("cash", "card"),
      },
      paymentDate: {
        type: sequelize.DATE,
      },
      createdAt: {
        allownull: true,
        type: sequelize.DATE,
      },
      updatedAt: {
        allownull: true,
        type: sequelize.DATE,
      },
    });
  },
  async down(queryInterface, sequelize) {
    await queryInterface.dropTable("Payments");
  },
};
