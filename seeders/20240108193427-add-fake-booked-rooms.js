"use strict";

const { randNumber } = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = new Array(40).fill().map(() => ({
      bookingId: randNumber({ min: 1, max: 10 }),
      roomId: randNumber({ min: 1, max: 10 }),
    }));

    await queryInterface.bulkInsert("BookedRooms", data, {});

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
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
