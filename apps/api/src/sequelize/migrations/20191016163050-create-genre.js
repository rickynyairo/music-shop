"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("genres", {
        genre_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        titme: {
          type: Sequelize.TEXT,
          allowNull: false
        }
      })
      .then(() => queryInterface.addIndex("genres", ["genre_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("genres");
  }
};
