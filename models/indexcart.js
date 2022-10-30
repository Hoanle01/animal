'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IndexCart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product,Cart}) {
      // define association here
      this.belongsTo(Product,{foreignKey:"index_product"})
      this.belongsTo(Cart,{foreignKey:"index_cart"})
    }
  }
  IndexCart.init({
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'IndexCart',
  });
  return IndexCart;
};