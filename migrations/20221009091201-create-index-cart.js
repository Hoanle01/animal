'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('IndexCarts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      index_product :{
        type:Sequelize.INTEGER,
        references:{
          model:'products',
          key:'id'
        }
        },
        index_cart:{
          type:Sequelize.INTEGER,
          references:{
            model:'carts',
            key:'id'
          }
        },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('IndexCarts');
  }
};