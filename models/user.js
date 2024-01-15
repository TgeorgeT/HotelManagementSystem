"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * helper method for defining associations.
     * this method is not a part of sequelize lifecycle.
     * the `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.User.hasMany(models.Booking);
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.ENUM("admin", "user")
    },
    {
      sequelize,
      modelname: "User",
    }
  );
  return User;
};
