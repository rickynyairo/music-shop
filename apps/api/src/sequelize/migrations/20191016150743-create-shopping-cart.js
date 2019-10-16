"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("shopping_cart", {
        item_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        cart_id: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        album_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      })
      .then(() => queryInterface.addIndex("shopping_cart", ["item_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("shopping_cart");
  }
};
