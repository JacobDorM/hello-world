// selecting h1
$("h1");
// selecting all li
$("li");

$("a");
$("li a");
$("ul li a");

$("h1").css("color", "yellow");
// select element with id "special" and give it a border
$("#special").css("border", "2px solid red");

// we can also pass in an object with styles
const styles = {
  backgroundColor: "pink",
  fobtWeight: "bold",
};

$("#special").css(styles);

document.querySelector("h1").style.color = "orange";

// select all li's and make them yellow
$("li").css("color", "yellow");

// select all elements with class "big"
// and give them an orange border
$(".big").css("border", "1px dashed orange");

$("li").css({
  fontSize: "10px",
  border: "3px dashed purple",
  background: "rgba(89, 45, 20, 0.5)",
});
