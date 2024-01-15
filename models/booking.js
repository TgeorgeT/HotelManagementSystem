"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Booking.belongsTo(models.User, {
        foreignKey: "userId",
      });
      models.Booking.belongsTo(models.Payment, {
        foreignKey: "paymentId",
      });
      models.Booking.belongsToMany(models.Room, {
        through: "BookedRooms",
      });
      //models.Booking.hasMany(models.BookedRooms, {});
    }
  }
  Booking.init(
    {
      userId: DataTypes.INTEGER,
      checkInDate: DataTypes.DATE,
      checkOutDate: DataTypes.DATE,
      totalPrice: DataTypes.FLOAT,
      timestamp: DataTypes.DATE,
      paymentId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
    }
  );
  return Booking;
};
