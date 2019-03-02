// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var setHtmlRoutes = require('./routing/htmlRoutes');
var setApiRoutes = require("./routing/apiRoutes");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Access to CSS files
app.use(express.static(path.join(__dirname, "./public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

setHtmlRoutes(app);
setApiRoutes(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  