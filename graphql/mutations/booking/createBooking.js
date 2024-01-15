const { GraphQLList, GraphQLInt, GraphQLString } = require('graphql');
const createBookingResolver = require('../../resolvers/booking/createBookingResolver');
const BookingType = require('../../types/booking/bookingType');

const createBooking = {
    type: BookingType,
    args: {
        userId: {
            type: GraphQLNonNull(GraphQLInt)
        },
        sizeTwoRoomCount: {
            type: GraphQLNonNull(GraphQLInt)
        },
        sizeFourRoomCount: {
            type: GraphQLNonNull(GraphQLInt)
        },
        checkInDate: {
            type: GraphQLNonNull(GraphQLString)
        },
        checkOutDate: {
            type: GraphQLNonNull(GraphQLString)
        },
    },
    resolve: createBookingResolver,
};

module.exports = createBooking;