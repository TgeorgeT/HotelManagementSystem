const { GraphQLObjectType, GraphQLString, GraphQLID } = require("graphql");

const { RoleEnumType } = require("../enums/RoleEnumType");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    role: {
      type: RoleEnumType,
    },
  },
});

module.exports = UserType;
