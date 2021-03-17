window.setTimeout(function() {

$("div").css("background", "purple");
$("div.highlight").css("font-size", "200px");
$("#third").css("border", "solid orange");
$( "div" ).first().css( "color", "pink");
$("div:first-of-type").css("color", "pink");

if(jQuery){
    alert("jQuery Loaded!");
} else {
    alert("No jQuery :");
}

}, 100);