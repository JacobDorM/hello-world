// prints when item with id 'submit' is clicked
$("#submit").on("click", function () {
  console.log("Another click");
});

// alerts when ANY button is clicked
$("button").on("click", function () {
  console.log("button clicked!");
});

// double click event
$("button").on("dblclick", function () {
  alert("DOUBLE CLICKED!");
});

// drag start event
$("a").on("dragstart", function () {
  console.log("DRAG STARTED!");
});

// ketpress event
$('input[type="text"]').on("keypress", function () {
  alert("key press in an input!");
});

// hover
$("button").on("mouseenter", function () {
  console.log("MOUSE ENTER!");
});

// change font-weight to bold while hovering
$("button").on("mouseenter", function () {
  $(this).css("font-weight", "bold");
});

// change font-weight to normal while hovering
$("button").on("mouseleave", function () {
  $(this).css("font-weight", "normal");
});

$("#dataTable tbody tr").on("click", function () {
  console.log($(this).text());
});
