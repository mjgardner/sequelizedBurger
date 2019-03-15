var express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
  burger.all(function(data) {
    res.render("index", { burgers: data });
  });
});

router.post("/api/burgers", function(req, res) {
  burger.create(req.body.burgerName, function(data) {
    res.json({ id: data.insertId });
  });
});

router.post("/api/burgers/:id", function(req, res) {
  burger.devour(req.params.id, function(data) {
    if (data.changedRows === 0) {
      res.sendStatus(404).end();
    } else {
      res.sendStatus(200).end();
    }
  });
});

module.exports = router;
