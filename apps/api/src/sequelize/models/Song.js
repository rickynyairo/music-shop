"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      song_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      album_id: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      genre_id: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0
      },
      created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      underscored: true,
      tablename: "songs"
    }
  );

  Song.associate = ({ Artist, Album, Genre }) => {
    Song.belongsTo(Artist, {
      foreignKey: "artist_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    Song.belongsTo(Album, {
      foreignKey: "album_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE"
    });
    Song.belongsTo(Genre, {
      foreignKey: "genre_id"
    });
  };

  return Song;
};
