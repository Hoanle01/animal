'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Cart,Favorite,Order}) {
      // define association here
      this.hasMany(Cart,{foreignKey:"index_user"})
      this.hasMany(Favorite,{foreignKey:"index_user"})
      this.hasMany(Order,{foreignKey:"index_user"})
      this.hasMany(Order,{foreignKey:"index_shipper"})
      
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    numberPhone: DataTypes.STRING,
    avatar:DataTypes.STRING,
    type: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};