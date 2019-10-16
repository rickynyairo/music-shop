"use strict";
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define(
    "Album",
    {
      album_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.TEXT
      },
      artist_id: {
        type: DataTypes.INTEGER
      },
      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      tableName: "albums",
      underscored: true
    }
  );
  Album.associate = ({ Artist, Song }) => {
    Album.belongsTo(Artist, {
      foreignKey: "artist_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: "album_artist"
    });

    Album.hasMany(Song, {
      foreignKey: "album_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: "album_songs"
    });
  };
  return Album;
};
