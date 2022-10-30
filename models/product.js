'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Production,Categories,IndexCart,Favorite,OrderDetail}) {
      // define association here
      this.belongsTo(Categories,{foreignKey:"index_categories",as:"category"})
      this.belongsTo(Production,{foreignKey:"index_production",as:"production"})
     this.hasMany(Favorite,{foreignKey:"index_product"})
      this.hasMany(IndexCart,{foreignKey:"index_product"})
      this.hasMany(OrderDetail,{foreignKey:"index_product"})


    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    image: DataTypes.STRING,
    discount:DataTypes.STRING,
    feature:DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};