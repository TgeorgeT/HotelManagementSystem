const {
  GraphQLList,
  GraphQLInt,
  GraphQLString,
  GraphQLNonNull,
} = require("graphql");
const createBookingResolver = require("../../resolvers/booking/createBookingResolver");
const BookingType = require("../../types/booking/bookingType");

const createBooking = {
  type: BookingType,
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    checkInDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    checkOutDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    roomIDs: {
      type: new GraphQLList(GraphQLInt),
    },
  },
  resolve: createBookingResolver,
};

module.exports = createBooking;
