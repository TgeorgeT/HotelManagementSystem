"use strict";
const {
  randEmail,
  randFullName,
  randPassword,
  randPastDate,
} = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, sequelize) {
    var data = new Array(5).fill().map(() => ({
      paymentType: "cash",
      paymentDate: randPastDate(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

    data = data.concat(
      new Array(5).fill().map(() => ({
        paymentType: "card",
        paymentDate: randPastDate(),
        createdAt: new Date(),
        updatedAt: new Date(),
      }))
    );

    await queryInterface.bulkInsert("Payments", data, {});
  },

  async down(queryInterface, sequelize) {
    /**
     * add commands to revert seed here.
     *
     * example:
     * await queryinterface.bulkdelete('people', null, {});
     */
  },
};
