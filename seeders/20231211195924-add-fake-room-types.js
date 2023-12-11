"use strict";

const { description } = require("../graphql/types/roomTypeType");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = [
      {
        description: "Residential",
        capacity: 2,
      },
      {
        description: "Suite",
        capacity: 4,
      },
    ];

    await queryInterface.bulkInsert("RoomTypes", data, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
