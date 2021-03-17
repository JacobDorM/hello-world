// prints when item with id "submit" is clicked
$("#submit").click(function(){
    console.log("Another click");
});

// alerts when ANY button is clicked
$("button").click(function(){
    alert("Someone clicked a button");
});

$("button").click(function(){
    const text = $(this).text();
    console.log("you clicked " + text);
});

$("button").click(function(){
$(this).css("background", "pink");
});

