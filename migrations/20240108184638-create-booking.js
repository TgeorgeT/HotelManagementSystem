"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Bookings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      checkInDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      checkOutDate: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      totalPrice: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      timestamp: {
        allowNuLL: true,
        type: Sequelize.DATE,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: "users",
          },
          key: "id",
        },
      },
      paymentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: {
            tableName: "payments",
          },
          key: "id",
        },
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Bookings");
  },
};
