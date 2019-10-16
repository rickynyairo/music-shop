"use strict";
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    "Artist",
    {
      artist_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      created_on: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
      }
    },
    {
      underscored: true,
      tableName: "artists"
    }
  );
  Artist.associate = function(models) {
    Artist.hasMany(models.Song, {
      foreignKey: "artist_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: "songs"
    });

    Artist.hasMany(models.Album, {
      foreignKey: "artist_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: "albums"
    });
  };
  return Artist;
};
