const { GraphQLObjectType, GraphQLInt } = require("graphql");

const RoomType = new GraphQLObjectType({
  name: "Room",
  fields: {
    id: { type: GraphQLInt },
    roomTypeId: { type: GraphQLInt },
    // Add other room fields here as necessary
    // For example, size, amenities, etc.
  },
});

module.exports = RoomType;
