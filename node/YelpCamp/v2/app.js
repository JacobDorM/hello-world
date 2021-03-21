var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/yelp_camp", {useNewUrlParser: true , useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// var campgrounds = [
// 		{name:"Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxSXN7iJUcQQiA1C5Xl8UCyGEgA9YHDKwkCELvPsuchqHjSxF1&usqp=CAU" },
// 		{name:"Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU" },
// 		{name:"Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqEI-J6WAdOhpe6FyN9F-7I5pDcPhLqzgkymqj6e-bXnRSsusa&usqp=CAU" },
// 		{name:"Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxSXN7iJUcQQiA1C5Xl8UCyGEgA9YHDKwkCELvPsuchqHjSxF1&usqp=CAU" },
// 		{name:"Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU" },
// 		{name:"Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqEI-J6WAdOhpe6FyN9F-7I5pDcPhLqzgkymqj6e-bXnRSsusa&usqp=CAU" },
// 		{name:"Salmon Creek", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxSXN7iJUcQQiA1C5Xl8UCyGEgA9YHDKwkCELvPsuchqHjSxF1&usqp=CAU" },
// 		{name:"Granite Hill", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU" },
// 		{name:"Mountain Goat's Rest", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqEI-J6WAdOhpe6FyN9F-7I5pDcPhLqzgkymqj6e-bXnRSsusa&usqp=CAU" }
// 	]

	var campgroundSchema = new mongoose.Schema({
	name: String,
	image: String,
	description: String
	});

	var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
// 	{
// 		name:"Granite Hill", 
// 		image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6WUDkB2NUxcoVFJsP6K1qupoNxTcZToReVkJNvJyi3Zwb1fKC&usqp=CAU",
// 		description:"This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
		
// 		}, function(err, campground){
// 			if(err){
// 				console.log(err);
// 		} else{
// 			console.log("NEWLY CREATED CAMPGROUND: ");
// 			console.log(campground);
// 		}
// 	});


	app.get("/", function(req, res){
		res.render("landing");
	});

app.get("/campgrounds", function(req, res){
		
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err)
		} else{
			res.render("index", {campgrounds: allCampgrounds});
		}
	});
});

	app.get("/campgrounds/new", function(req, res){
		res.render("new.ejs");
	})

	app.post("/campgrounds", function(req, res){
	var name =req.body.name;
	var image =req.body.image;
	var desc = req.body.description;
	var newCampground = {name: name, image: image, description: desc}
	Campground.create(newCampground, function(err,newlyCreated){
		if(err){
				console.log(err);
		} else{
			res.redirect("/campgrounds");
		}
	});		
});

	app.get("/campgrounds/:id", function(req, res){
		Campground.findById(req.params.id, function(err, foundCampground){
			if(err){
				console.log(err);
			} else{
				res.render("show", {campground: foundCampground});
			}
		});
		
	});

	app.listen(3000, function() { 
  		console.log('The YelpCamp Server Has Started!'); 
	});