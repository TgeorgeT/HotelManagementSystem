"use strict";
const { randEmail, randFullName, randPassword } = require("@ngneat/falso");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    var data = new Array(20).fill().map(() => ({
      name: randFullName(),
      email: randEmail(),
      password: randPassword(),
      role: "user",
      createdAt: new Date(),
      updatedAt: new Date(),
    }));

   data = data.concat(
      new Array(2).fill().map(() => ({
        name: randFullName(),
      email: randEmail(),
      password: randPassword(),
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      }))
    ); 

    await queryInterface.bulkInsert("Users", data, {});
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
