const { GraphQLEnumType } = require("graphql");

const PaymentEnumType = new GraphQLEnumType({
  name: "PaymentEnum",
  values: {
    CASH: { value: "cash" },
    CARD: { value: "card" },
  },
});

module.exports = {
  PaymentEnumType,
};
