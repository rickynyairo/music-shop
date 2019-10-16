"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable("songs", {
        song_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        artist_id: {
          type: Sequelize.INTEGER,
          allowNull: false
        },
        album_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        genre_id: {
          type: Sequelize.INTEGER,
          allowNull: true
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: true,
          defaultValue: 0
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
      .then(() => queryInterface.addIndex("songs", ["song_id"]));
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("songs");
  }
};
