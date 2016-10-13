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


//twitter function
function getTwitter(){
var params = {screen_name: 'ZooJerzey'};
tClient.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
      for (i=0;i<20;i++){
      console.log("Tweeted: "+ tweets[i].text + " on: "+ tweets[i].created_at)
  }
}
});
}

//spotify function
function spotifySong(){

  spotify.search({ type: 'track', query: item}, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
      }
        var search = data.tracks.items[0]
        console.log("\nSong: " + search.name + "\nArtist: "+search.artists[0].name + "\nAlbum: " + search.album.name + "\nLink: " + search.preview_url)
         
});
}

//commands processing
if(command=="my-tweets") {
  getTwitter();
}
else if(command=="spotify-this-song") {
  spotifySong();
}



