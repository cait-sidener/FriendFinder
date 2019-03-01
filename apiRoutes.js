// Dependencies
var path = require("path");

// Import friends array
var friends = require("../app/data/friends.js");

// Export routes
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // Add new friends
    app.post("/api/friends", function (req, res) {
        var userChoice = req.body;
        var userAnswers = userChoice.scores;

        // Computing matches
        var matchName = "";
        var matchImage = "";
        var difference = 1000;

        for (var i = 0; i < friends.length; i++) {

            var diff = 0;
            for (var j = 0; j < userAnswers.length; j++) {
                diff += Math.abs(friends[i].scores[j] - userAnswers[j]);
            }

            if (diff < difference) {
                difference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        // Add new user
        friends.push(userChoice);

        res.json({
            status: "OK",
            matchName: matchName,
            matchImage: matchImage
        });

    });
};