var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var Burger = sequelize.define("burger", {
  burgerName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      notEmpty: true
    }
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notNull: true
    }
  }
});

Burger.sync();

module.exports = Burger;
