window.setTimeout(() => {
  $("ul").on("click", "li", () => {
    $(this).toggleClass("completed");
  });

  // Click on X to delete Todo
  $("ul").on("click", "span", (event) => {
    $(this)
      .parent()
      .fadeOut(500, () => {
        $(this).remove();
      });
    event.stopPropagation();
  });

  $('input[type="text"]').keypress((event) => {
    if (event.which === 13) {
      // grabbing new todo text from input
      const todoText = $(this).val();
      $(this).val("");
      //   create a new li and add to ul
      $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
  });

  $(".fa-plus").click(() => {
    $('input[type="text"]').fadeToggle();
  });
}, 0.1);
