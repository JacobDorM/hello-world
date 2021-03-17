window.setTimeout(() => {
  const todos: string[] = ["Buy new turtle"];

  let input: string = prompt("What would you like to do");

  const listTodos: () => void = () => {
    console.log("*******");
    todos.forEach((todo, i) => {
      console.log(i + ": ", todo);
    });
    console.log("*******");
  };

  const addTodo: () => void = () => {
    const newTodo: string = prompt("Enter new todo");
    todos.push(newTodo);
    console.log("Added Todo");
  };

  const deleteTodo: () => void = () => {
    const index: number = parseInt(prompt("Enter index of todo to delete"));
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
