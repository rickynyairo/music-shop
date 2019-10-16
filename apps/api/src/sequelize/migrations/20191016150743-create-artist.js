"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("artist", {
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
        },
        created_on: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: Sequelize.literal("NOW()")
        }
      })
      .then(() => queryInterface.addIndex("artist", ["artist_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("artist");
  }
};
