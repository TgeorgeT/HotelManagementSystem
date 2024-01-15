const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

const BookingType = new GraphQLObjectType({
    name: 'Booking',
    fields: {
        id: { type: GraphQLInt },
        guestName: { type: GraphQLString },
        checkInDate: { type: GraphQLString },
        checkOutDate: { type: GraphQLString },
        roomNumber: { type: GraphQLInt },
    },
});

module.exports = BookingType;
