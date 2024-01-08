"use strict";

const {
  randNumber,
  randFloat,
  randFutureDate,
  randPastDate,
} = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = new Array(10).fill().map(() => ({
      userId: randNumber({ min: 1, max: 10 }),
      checkInDate: randPastDate(),
      checkOutDate: randFutureDate(),
      totalPrice: randFloat({ min: 100, max: 1000 }),
      timestamp: randPastDate(),
      paymentId: randNumber({ min: 1, max: 10 }),
    }));

    await queryInterface.bulkInsert("Bookings", data, {});
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
