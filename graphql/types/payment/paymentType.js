const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

const RoomType = require("../room/roomType.js");

const db = require("../../../models");
const { PaymentEnumType } = require("../enums/PaymentEnumType.js");
const BookingType = require("../booking/bookingType.js");

const PaymentType = new GraphQLObjectType({
  name: "Payment",
  fields: {
    id: { type: GraphQLInt },
    paymentType: { type: PaymentEnumType },

    booking: {
      type: BookingType,
      async resolve(parent, _) {
        return await db.Booking.findOne({
          where: { paymentId: parent.id },
        });
      },
    },
  },
});

module.exports = PaymentType;
