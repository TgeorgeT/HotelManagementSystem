"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = new Array(5).fill().map(() => ({
      price: 100.5,
      roomTypeId: 1,
    }));

    data = data.concat(
      new Array(5).fill().map(() => ({
        price: 200.75,
        roomTypeId: 2,
      }))
    );

    await queryInterface.bulkInsert("Rooms", data, {});
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
