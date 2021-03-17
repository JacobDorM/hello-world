$("img").css("width", "200px");

// $("input").attr("type","color");
// $("input").attr("type","checkbox");
$("img:first-of-type").attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("img").last().attr("src", "https://c3.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");
$("input").val("Jacob Dor Menachem");

$("h1").addClass("correct");

$("h1").addClass("correct");
// $("h1").removeClass("correct");
// $("li").addClass("correct");
$("li").toggleClass("correct");
$("li").first().toggleClass("done");
// $("li").toggleClass("done");
