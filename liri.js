//Set up requires
var tKeys = require("./keys.js");
var fs = require("fs");
var request = require("request");
var twitter = require("twitter");
var spotify = require("spotify");

//set up variables
var command = process.argv[2];
var item = process.argv[3];


//set up twitter client
var tClient = new twitter(tKeys.twitterKeys);


//commands processing
if(command=="my-tweets") {
  getTwitter();
}

//twitter function
function getTwitter(){
var params = {screen_name: 'ZooJerzey'};
tClient.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for (var i=0;i<tweets.length;i++){
      console.log("Tweeted: "+ tweets[i].text + " on: "+ tweets[i].created_at)
  }
}
});
}





