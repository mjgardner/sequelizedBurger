var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("./models");

var router = require("./controllers/burger_controller");
app.use(router);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App now listening at http://localhost:" + PORT);
  });
});
