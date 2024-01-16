const { GraphQLObjectType } = require("graphql");

const createUser = require("./mutations/user/createUser");
const updateUser = require("./mutations/user/updateUser");
const deleteUser = require("./mutations/user/deleteUser");
const createBooking = require("./mutations/booking/createBooking");
const login = require("./mutations/user/login");
const createPayment = require("./mutations/payment/createPayment");

const mutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: createUser,
    updateUser: updateUser,
    deleteUser: deleteUser,
    createPayment: createPayment,
    createBooking: createBooking,
    login: login,
  },
});

module.exports = mutationType;
