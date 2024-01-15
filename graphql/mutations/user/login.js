const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = require("graphql");
const loginResolver = require("../../resolvers/user/loginResolver");
const AuthType = require("../../types/user/AuthType");

const login = {
  type: AuthType,
  args: {
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: loginResolver,
};

module.exports = login;
