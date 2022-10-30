'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      numberPhonne: {
        type: Sequelize.STRING
      },
      status_order: {
        type: Sequelize.STRING
      },
      date_receipt: {
        type: Sequelize.STRING
      },
      date_delivery: {
        type: Sequelize.STRING
      },
      date_order: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      index_user: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },  index_shipper: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};