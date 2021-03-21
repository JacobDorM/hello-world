var express = require("express");
var app = express();
var bodyParser = require("body-parser");
// var request = require("request");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
		{name:"Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxSXN7iJUcQQiA1C5Xl8UCyGEgA9YHDKwkCELvPsuchqHjSxF1&usqp=CAU" },
		{name:"Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU" },
		{name:"Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqEI-J6WAdOhpe6FyN9F-7I5pDcPhLqzgkymqj6e-bXnRSsusa&usqp=CAU" },
		{name:"Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxSXN7iJUcQQiA1C5Xl8UCyGEgA9YHDKwkCELvPsuchqHjSxF1&usqp=CAU" },
		{name:"Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU" },
		{name:"Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqEI-J6WAdOhpe6FyN9F-7I5pDcPhLqzgkymqj6e-bXnRSsusa&usqp=CAU" },
		{name:"Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxSXN7iJUcQQiA1C5Xl8UCyGEgA9YHDKwkCELvPsuchqHjSxF1&usqp=CAU" },
		{name:"Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU" },
		{name:"Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqEI-J6WAdOhpe6FyN9F-7I5pDcPhLqzgkymqj6e-bXnRSsusa&usqp=CAU" }
	]

	app.get("/", function(req, res){
		res.render("landing");
	});

	app.get("/campgrounds", function(req, res){
	
		res.render("campgrounds", {campgrounds: campgrounds});
	});

	app.get("/campgrounds/new", function(req, res){
		res.render("new.ejs");
	})

	app.post("/campgrounds", function(req, res){
		var name =req.body.name;
		var image =req.body.image;
		var newCampground = {name: name, image: image}
		campgrounds.push(newCampground);
		// 	redirect back to campgrounds page
		res.redirect("/campgrounds");
	});

	app.listen(3000, function() { 
  		console.log('The YelpCamp Server Has Started!'); 
	});