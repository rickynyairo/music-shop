"use strict";
module.exports = (sequelize, DataTypes) => {
  const Genre = sequelize.define(
    "Genre",
    {
      genre_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false
      }
    },
    {
      tableName: "genres",
      underscored: true
    }
  );
  Genre.associate = ({ Song }) => {
    Genre.hasMany(Song, {
      foreignKey: "genre_id",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      as: "genre_songs"
    });
  };
  return Genre;
};
