const {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
} = require("graphql");

const { RoleEnumType } = require("../enums/RoleEnumType");

const userInputType = new GraphQLInputObjectType({
  name: "UserInputType",
  fields: {
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    password: {
      type: new GraphQLNonNull(GraphQLString),
    },
    role: {
      type: new GraphQLNonNull(RoleEnumType),
    },
  },
});

module.exports = userInputType;
