"use strict";
const models = require("../models");
const { Artist } = models;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await Artist.findOrCreate({
      where: {
        email: "john_doe@gmail.com"
      },
      defaults: {
        name: "John Doe",
        email: "john_doe@gmail.com"
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("artist", null, {});
  }
};
