"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("artists", {
        artist_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        email: {
          type: Sequelize.TEXT,
          allowNull: false,
          unique: true
        }
      })
      .then(() => queryInterface.addIndex("artists", ["artist_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("artists");
  }
};
