const db = require("./db");

const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID,
} = require("graphql");

const userQuery = require("./queries/user");
const usersQuery = require("./queries/users");
const availableRooms = require("./queries/availableRooms");
const paymentQuery = require("./queries/payment");

const queryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    users: usersQuery,
    user: userQuery,
    payment: paymentQuery,
    availableRooms: availableRooms,
  },
});

module.exports = queryType;
