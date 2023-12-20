const { GraphQLObjectType, GraphQLString } = require("graphql");

const userType = require("../types/userType");

const AuthType = new GraphQLObjectType({
  name: "AuthType",
  fields: {
    token: {
      type: GraphQLString,
    },
    user: {
      type: userType,
    },
  },
});

module.exports = AuthType;
