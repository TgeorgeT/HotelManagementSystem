const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
} = require("graphql");

const RoomType = require("../room/roomType.js");

const db = require("../../../models");

const BookingType = new GraphQLObjectType({
  name: "Booking",
  fields: {
    id: { type: GraphQLInt },
    checkInDate: { type: GraphQLString },
    checkOutDate: { type: GraphQLString },
    totalPrice: { type: GraphQLFloat },

    rooms: {
      type: new GraphQLList(RoomType),
      async resolve(parent, args) {
        console.log("booking = ", parent.id);
        return await db.Room.findAll({
          include: [
            {
              model: db.BookedRooms,
              where: { bookingId: parent.id },
              include: [
                {
                  model: db.Booking,
                },
              ],
            },
          ],
        });
      },
    },
  },
});

module.exports = BookingType;
