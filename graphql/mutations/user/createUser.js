const db = require("../../db");

const { GraphQLString, GraphQLNonNull } = require("graphql");
const UserType = require("../../types/user/userType");
const createUserResolver = require("../../resolvers/user/createUserResolver");
const userInputType = require("../../types/user/userInputType");

const createUser = {
  type: UserType,
  args: {
    user: {
      type: userInputType,
    },
  },
  resolve: createUserResolver,
};

module.exports = createUser;
