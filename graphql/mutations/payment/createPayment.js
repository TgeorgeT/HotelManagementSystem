const {
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");

const createPaymentResolver = require("../../resolvers/payment/createPaymentResolver");
const PaymentType = require("../../types/payment/paymentType");
const { PaymentEnumType } = require("../../types/enums/PaymentEnumType");

const createPayment = {
  type: PaymentType,
  args: {
    bookingId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    paymentDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    paymentType: {
      type: new GraphQLNonNull(PaymentEnumType),
    },
  },
  resolve: createPaymentResolver,
};

module.exports = createPayment;
