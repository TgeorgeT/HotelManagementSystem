"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * helper method for defining associations.
     * this method is not a part of sequelize lifecycle.
     * the `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.Payment.hasOne(models.Booking, {});
    }
  }
  Payment.init(
    {
      paymentType: DataTypes.ENUM("cash", "card"),
      paymentDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelname: "Payment",
    }
  );
  return Payment;
};
