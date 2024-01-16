const db = require("../../models");

const PaymentType = require("../types/payment/paymentType");

const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");

const paymentQuery = {
  type: PaymentType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLID),
    },
  },
  resolve: async (_, args) => {
    return await db.Payment.findOne({ where: { id: args.id } });
  },
};

module.exports = paymentQuery;
