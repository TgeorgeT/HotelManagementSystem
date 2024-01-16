const db = require("../../models");

const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");

const UserType = require("../types/user/userType");
const userQueryResolver = require("../resolvers/user/userQueryResolver");

const userQuery = {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: userQueryResolver,
};

module.exports = userQuery;

UserType.add;
