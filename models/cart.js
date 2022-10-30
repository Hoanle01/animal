'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({IndexCart,User}) {
      // define association here
      this.hasMany(IndexCart,{foreignKey:"index_cart"})
      this.belongsTo(User,{foreignKey:"index_user"})
    }
  }
  Cart.init({
    total_price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};