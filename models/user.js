'use strict';
const {
  Model,
  DataTypes 
} = require('sequelize');
module.exports = (sequelize ) => {
  class user extends Model{
    /**
     * helper method for defining associations.
     * this method is not a part of sequelize lifecycle.
     * the `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING 
  }, {
    sequelize,
    modelname: 'user',
  });
  return user;
};