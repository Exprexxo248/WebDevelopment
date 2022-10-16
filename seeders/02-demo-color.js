"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      {
        name: "Crimson",
        code: "#c60e39",
        imagePath: "http://dummyimage.com/28x26.png/dddddd/000000",
      },
      {
        name: "Puce",
        code: "#f83edd",
        imagePath: "http://dummyimage.com/26x26.png/5fa2dd/ffffff",
      },
      {
        name: "Maroon",
        code: "#5a67b1",
        imagePath: "http://dummyimage.com/25x25.png/ff4444/ffffff",
      },
      {
        name: "Maroon",
        code: "#481587",
        imagePath: "http://dummyimage.com/30x26.png/dddddd/000000",
      },
      {
        name: "Goldenrod",
        code: "#9ff8ee",
        imagePath: "http://dummyimage.com/27x30.png/ff4444/ffffff",
      },
      {
        name: "Purple",
        code: "#39bb14",
        imagePath: "http://dummyimage.com/26x29.png/5fa2dd/ffffff",
      },
      {
        name: "Crimson",
        code: "#ad762b",
        imagePath: "http://dummyimage.com/26x27.png/5fa2dd/ffffff",
      },
      {
        name: "Yellow",
        code: "#6e38a6",
        imagePath: "http://dummyimage.com/26x28.png/cc0000/ffffff",
      },
      {
        name: "Teal",
        code: "#6cd0a9",
        imagePath: "http://dummyimage.com/28x29.png/5fa2dd/ffffff",
      },
      {
        name: "Indigo",
        code: "#e1e600",
        imagePath: "http://dummyimage.com/26x26.png/dddddd/000000",
      },
    ];
    data.map((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    });
    await queryInterface.bulkInsert("Colors", data, []);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Colors", null, {});
  },
};
