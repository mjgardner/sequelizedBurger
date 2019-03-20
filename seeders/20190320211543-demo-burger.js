'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Burgers", [
      {
        burgerName: "Plain hamburger",
        devoured: false
      },
      {
        burgerName: "Cheeseburger",
        devoured: false
      },
      {
        burgerName: "Bacon double cheeseburger",
        devoured: false
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Burgers", null, {});
  }
};
