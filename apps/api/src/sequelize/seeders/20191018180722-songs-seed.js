"use strict";
const models = require("../models");
const { Song } = models;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Song.create({
      name: "my first song",
      artist_id: 1,
      price: 12,
      album_id: 1,
      genre_id: 1
    });
    await Song.create({
      name: "my second song",
      artist_id: 1,
      price: 23,
      album_id: 1,
      genre_id: 1
    });
    await Song.create({
      name: "my third song",
      artist_id: 1,
      price: 34,
      album_id: 1,
      genre_id: 1
    });
    await Song.create({
      name: "my fourth song",
      artist_id: 1,
      price: 45,
      album_id: 1,
      genre_id: 1
    });
    await Song.create({
      name: "my fifth song",
      artist_id: 1,
      price: 67,
      album_id: 1,
      genre_id: 1
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artist", null, {});
  }
};
