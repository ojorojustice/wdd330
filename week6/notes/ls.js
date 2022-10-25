
let toDoList = {
  id: Date.now(),
  content: "",
  completed: true,
};

function todolistLocalStorage(todo) {
  let toDos;
  if (localStorage.getItem("todos") === null) {
    toDos = [];
  } else {
    toDos = JSON.parse(localStorage.getItem("todos"));
  }

  toDoList.id = Date.now();
  toDoList.content = todo;
  toDoList.completed = true;
  toDos.push(toDoList);

  localStorage.setItem("todos", JSON.stringify(toDos));
}

export {toDoList,todolistLocalStorage}