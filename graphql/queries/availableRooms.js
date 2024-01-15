const db = require("../../models");

const {
  GraphQLNonNull,
  GraphQLID,
  GraphQLList,
  GraphQLString,
} = require("graphql");

const RoomType = require("../types/room/roomType.js");
const availableRoomsResolver = require("../resolvers/avaialableRooms/availableRoomsResolver.js");

const availableRoomsQuery = {
  type: new GraphQLList(RoomType),
  args: {
    startDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
    endDate: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: availableRoomsResolver,
};

module.exports = availableRoomsQuery;
