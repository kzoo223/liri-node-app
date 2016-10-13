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

function movieTime(){
    request("http://www.omdbapi.com/?t="+item+"&plot=short&tomatoes=true&r=json", function(error, data, body){
      if(item == ""){
        item = "Mr.Nobody"
        var returnMovie = JSON.parse(data.body)
        console.log(returnMovie)
        console.log("\nTitle: "+ returnMovie.Title + "\nYear: "+ returnMovie.Year + "\nIMDB Rating: "+returnMovie.imdbRating+ "\nCountry: "+ returnMovie.Country + "\nLanguage: "+ returnMovie.Language + "\nActors: "+ returnMovie.Actors + "\nplot: " + returnMovie.Plot + "\nRotten Tomatoes Rating: "+ returnMovie.tomatoRating+ "\nRotten Tomatoes URL: " + returnMovie.tomatoURL)
      }
      else if (!error){
        var returnMovie = JSON.parse(data.body)
        console.log("\nTitle: "+ returnMovie.Title + "\nYear: "+ returnMovie.Year + "\nIMDB Rating: "+returnMovie.imdbRating+ "\nCountry: "+ returnMovie.Country + "\nLanguage: "+ returnMovie.Language + "\nActors: "+ returnMovie.Actors + "\nplot: " + returnMovie.Plot + "\nRotten Tomatoes Rating: "+ returnMovie.tomatoRating+ "\nRotten Tomatoes URL: " + returnMovie.tomatoURL)
      }

});
}



//commands processing
if(command=="my-tweets") {
  getTwitter();
}
else if(command=="spotify-this-song") {
  spotifySong();
}
else if(command=="movie-this"){
  movieTime();
}


