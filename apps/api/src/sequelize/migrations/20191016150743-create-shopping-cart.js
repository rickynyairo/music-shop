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
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("NOW()")
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("NOW()")
        }
      })
      .then(() => queryInterface.addIndex("shopping_cart", ["item_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("shopping_cart");
  }
};
