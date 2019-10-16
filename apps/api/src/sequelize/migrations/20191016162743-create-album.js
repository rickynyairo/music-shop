"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("albums", {
        album_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        artist_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
          defaultValue: 0
        }
      })
      .then(() => queryInterface.addIndex("albums", ["album_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("albums");
  }
};
