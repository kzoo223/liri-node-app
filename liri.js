//Set up requires
var tKeys = require("keys.js");
var fs = require("fs");
var request = require("request");
var twitter = requre("twitter");
var spotify = require("spotify");

//set up variables
var command = process.argv[2];
var item = process.argv[3];


//set up twitter client
var tClient = new twitter(
  keys.twitterKeys
)

