"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookedRooms extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.BookedRooms.belongsTo(models.Booking, {
        foreignKey: "bookingId",
      });
      models.BookedRooms.belongsTo(models.Room, {
        foreignKey: "roomId",
      });
    }
  }
  BookedRooms.init(
    {
      bookingId: DataTypes.INTEGER,
      roomId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BookedRooms",
    }
  );
  return BookedRooms;
};
