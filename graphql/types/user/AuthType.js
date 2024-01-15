const { GraphQLObjectType, GraphQLString } = require("graphql");

const userType = require("../user/userType");

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
