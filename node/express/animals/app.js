var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	var sounds = {
	pig: "Oink",
	dog: "Woof Woof!",
	cow: "Moo",
	cat: "I hate you human",
	goldfish: "..."
	}
	var sound = sounds[animal];
	
	res.send("The " + animal + " says " + "'" + sound + "'");

});

app.get("/repeat/:word/:number", function(req, res){
	var word = req.params.word;
	var number =  parseInt(req.params.number);
	var sumWord = "";
	
	for(i = 0; i < number; i++){
		sumWord = sumWord + " " + word ;
	}
	res.send(sumWord);
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});
		
app.listen(3000, function() { 
	 console.log('Server listening on port 3000'); 
});

