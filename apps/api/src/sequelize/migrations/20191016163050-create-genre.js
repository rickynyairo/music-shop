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
      .then(() => queryInterface.addIndex("genres", ["genre_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("genres");
  }
};
