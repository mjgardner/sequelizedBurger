var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  db.Burger.findAll({
    order: [["burgerName", "ASC"]]
  }).then(function(burgers) {
    res.render("index", { burgers: burgers });
  });
});

router.post("/api/burgers", function(req, res) {
  db.Burger.create({
    burgerName: req.body.burgerName
  }).then(function(burger) {
    res.json({ id: burger.id });
  });
});

router.post("/api/burgers/:id", function(req, res) {
  db.Burger.findByPk(req.params.id).then(function(burger) {
    if (burger) {
      burger.devoured = true;
      burger.save().then(function() {
        res.sendStatus(200).end();
      });
    } else {
      res.sendStatus(404).end();
    }
  });
});

module.exports = router;
