var orm = require("../config/orm");

var burger = {
  all: function(callback) {
    orm.selectAll("burgers", function(result) {
      callback(result);
    });
  },
  create: function(burgerName, callback) {
    orm.insertOne("burgers", ["burger_name"], [burgerName], function(result) {
      callback(result);
    });
  },
  devour: function(burgerId, callback) {
    orm.updateOne("burgers", { devoured: true }, burgerId, function(result) {
      callback(result);
    });
  }
};

module.exports = burger;
