var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
	res.send("Hi there!")
});

// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
	res.send("Goodbye!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
	  console.log('Someone made a request to /dogs'); 
	res.send("MEOW!")
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
	console.log(req.params);
	res.send("WELCOME TO THE COMMENTS PAGE!");
});

app.get("*", function(req, res){
	res.send("YOU ARE A START!!!");
});
// Tell Express to listen for requests (start server)

app.listen(3000, function() { 
  console.log('Server listening on port 3000'); 
});
