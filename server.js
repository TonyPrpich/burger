
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3306;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(express.static('public'));


app.use(require('controllers/burgers_controller.js'));

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});