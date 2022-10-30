'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User,OrderDetail}) {
      // define association here
      this.belongsTo(User,{foreignKey:"index_user"})
      this.belongsTo(User,{foreignKey:"index_shipper"})
      this.hasMany(OrderDetail,{foreignKey:"index_order"})
      
    }
  }
  Order.init({
    address: DataTypes.STRING,
    numberPhonne: DataTypes.STRING,
    status_order: DataTypes.STRING,
    date_receipt: DataTypes.STRING,
    date_delivery: DataTypes.STRING,
    date_order: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};