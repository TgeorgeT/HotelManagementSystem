const { GraphQLEnumType } = require("graphql");

const RoleEnumType = new GraphQLEnumType({
  name: "Role",
  values: {
    ADMIN: { value: "admin" },
    USER: { value: "user" },
  },
});

module.exports = {
  RoleEnumType,
};
