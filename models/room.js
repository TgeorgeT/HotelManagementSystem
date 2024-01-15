"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Room.belongsTo(models.RoomType, {
        onDelete: "CASCADE",
      });
      models.Room.belongsToMany(models.Booking, {
        through: "BookedRooms",
      });
      models.Room.hasMany(models.BookedRooms, {});
    }
  }
  Room.init(
    {
      price: DataTypes.FLOAT,
      roomTypeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Room",
    }
  );
  return Room;
};
