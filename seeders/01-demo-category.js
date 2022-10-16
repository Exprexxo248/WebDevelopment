"use strict";

const { sequelize } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let data = [
      { name: "Men", imagePath: "/img/home/hero-slide1.png" },
      { name: "Women", imagePath: "/img/home/hero-slide2.png" },
      { name: "Accessories", imagePath: "/img/home/hero-slide3.png" },
      { name: "Footwear", imagePath: "/img/home/hero-slide1.png" },
      { name: "Bay item", imagePath: "/img/home/hero-slide2.png" },
      { name: "Electronics", imagePath: "/img/home/hero-slide3.png" },
      { name: "Food", imagePath: "/img/home/hero-slide1.png" },
    ];
    data.map((item) => {
      item.createdAt = Sequelize.literal("NOW()");
      item.updatedAt = Sequelize.literal("NOW()");
      return item;
    });
    await queryInterface.bulkInsert("Categories", data, []);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
