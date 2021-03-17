window.setTimeout(() => {
  const todos = ["Buy new turtle"];
  let input = prompt("What would you like to do");
  const listTodos = () => {
    console.log("*******");
    todos.forEach((todo, i) => {
      console.log(i + ": ", todo);
    });
    console.log("*******");
  };
  const addTodo = () => {
    const newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
  };
  const deleteTodo = () => {
    const index = parseInt(prompt("Enter index of todo to delete"));
    todos.splice(index, 1);
    console.log("Deleted Todo");
  };
  while (input !== "quit") {
    if (input === "list") {
      listTodos();
    } else if (input === "new") {
      addTodo();
    } else if (input === "delete") {
      deleteTodo();
    }
    input = prompt("What would you like to do");
  }
  console.log("OK,YOU QUIT THE APP");
}, 500);
