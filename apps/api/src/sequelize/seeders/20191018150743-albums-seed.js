"use strict";
const models = require("../models");
const { Album } = models;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Album.create({ title: "a new album", artist_id: 1, price: 12 });
    await Album.create({ title: "a second album", artist_id: 1, price: 12 });
    await Album.create({ title: "a third album", artist_id: 1, price: 24 });
    await Album.create({ title: "a fourth album", artist_id: 1, price: 34 });
    await Album.create({ title: "a fifth album", artist_id: 1, price: 54 });
    return;
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artist", null, {});
  }
};
