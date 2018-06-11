var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

//doesn't listen to port when typing node server.js, I'm not sure why.
var PORT = 3000;

var friends = [];

//Not sure how this works, got it from the restaurant app.
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    var newfriend = req.body;

          friends.push(newfriend);
          res.json(true);
      
      console.log(newfriend);
      
  });