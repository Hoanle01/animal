'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Product}) {
      // define association here
      this.hasMany(Product,{foreignKey:"index_categories",as:"category"})
    }
  }
  Categories.init({
    name: {type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notEmpty:true,
        //len:[3,30]
        checklen(value){
          if(value.length>=5 && value.length<=20){
            return true;
          }else{
            throw new Error('độ dài phải từ 5-10')
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Categories',
  });
  return Categories;
};