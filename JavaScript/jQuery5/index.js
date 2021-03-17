$('input[type="text"]').keypress(function () {
  alert("text input keypress!");
});

$('input[type="text"]').keypress(function () {
  console.log("Handler for .keypress() called.");
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    alert("YOU HIT ENTER!");
  }
});
