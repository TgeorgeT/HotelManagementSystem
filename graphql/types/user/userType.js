const {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require("graphql");

const { RoleEnumType } = require("../enums/RoleEnumType");
const BookingType = require("../booking/bookingType");

const db = require("../../../models");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    email: {
      type: GraphQLString,
    },
    role: {
      type: RoleEnumType,
    },

    bookings: {
      type: new GraphQLList(BookingType),
      resolve(parent, args) {
        return db.Booking.findAll({
          where: {
            userId: parent.id,
          },
        });
      },
    },
  },
});

module.exports = UserType;
