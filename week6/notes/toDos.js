import { countNotCompleted,filterSpan} from "./utilities.js";
import{todolistLocalStorage,toDoList} from "./ls.js"
//selectors

const todoButtons = document.querySelector(".todo-btn");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//filtering
const filterField = document.querySelector(".filterField");

const allButton = document.getElementById("all-buttons");
const activeButton = document.getElementById("active-buttons");
const completedButton = document.getElementById("completed-buttons");






//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//eventListerners
document.addEventListener("DOMContentLoaded", getTodoList);
todoButtons.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteChecked);
todoList.addEventListener("click", countNotCompleted);
todoButtons.addEventListener("click", countNotCompleted);

//filtering

filterSpan.innerText = "          ";
allButton.addEventListener("click", countClick);
activeButton.addEventListener("click", countClick);
completedButton.addEventListener("click", countClick);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++
//functions.
countNotCompleted();

function addTodo(event) {
  //preventdefault
  event.preventDefault();
  console.log("Hurray");
  //create a div
  const todoRepeats = document.createElement("div");
  todoRepeats.classList.add("todos");

  //create the li

  const newTodos = document.createElement("li");
  newTodos.classList.add("todoLi");
  if (todoInput.value.length < 2) {
    alert("Plese enter today's task");
    return false;
  } else {
    newTodos.innerText = todoInput.value;
  }
  todolistLocalStorage(todoInput.value);
  //completedButtons
  const completedButtons = document.createElement("button");
  completedButtons.innerHTML = '<i class="fas fa-check"></i>';
  completedButtons.classList.add("completed-button");
  todoRepeats.appendChild(completedButtons);
  todoRepeats.appendChild(newTodos);

  //deleteButtons
  const deleteButtons = document.createElement("button");
  deleteButtons.innerHTML = '<i class="fas fa-trash"></i>';
  deleteButtons.classList.add("deleted-button");
  todoRepeats.appendChild(deleteButtons);

  todoList.appendChild(todoRepeats);

  todoInput.value = "";
}

function countClick(e) {
  const todos = todoList.childNodes;
  //let count = 0;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        // count++;
        break;
      case "active":
        if (todo.classList.contains("completeFilter")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
          // count++;
        }
        break;
      case "completed":
        if (!todo.classList.contains("completeFilter")) {
          todo.style.display = "none";
        } else {
          todo.style.display = "flex";
          //count++;
        }
        break;
    }
    //filterSpan.innerText = `${count} items in all`;
  });
}

function deleteChecked(e) {
  const item = e.target;

  if (item.classList[0] === "deleted-button") {
    const itemParent = item.parentElement;
    removeTodoList(itemParent);
    itemParent.remove();
  }

  if (item.classList[0] === "completed-button") {
    const itemParent = item.parentElement;
    itemParent.classList.toggle("completeFilter");
    if (item.parentElement.classList.contains("completeFilter")) {
      let toDos = JSON.parse(localStorage.getItem("todos"));
      toDos.forEach(function (todo) {
        console.log(todo.content);
        if (todo.content === item.parentElement.childNodes[1].innerText) {
          let indexInTodos = toDos.indexOf(todo);
          toDos[indexInTodos].completed = false;
          console.log(toDos);
          localStorage.setItem("todos", JSON.stringify(toDos));
          console.log(JSON.parse(localStorage.getItem("todos")));
          countNotCompleted();
        }
      });
    }else{
      let toDos = JSON.parse(localStorage.getItem("todos"));
      toDos.forEach(function (todo) {
        console.log(todo.content);
        if (todo.content === item.parentElement.childNodes[1].innerText) {
          let indexInTodos = toDos.indexOf(todo);
          toDos[indexInTodos].completed = true;
          console.log(toDos);
          localStorage.setItem("todos", JSON.stringify(toDos));
          console.log(JSON.parse(localStorage.getItem("todos")));
          countNotCompleted();
        }
      });
    }
  }
}



function getTodoList() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  todos.forEach(function (todo) {
    //create a div
    const todoRepeats = document.createElement("div");
    todoRepeats.classList.add("todos");

    //create the li

    const newTodos = document.createElement("li");
    newTodos.classList.add("todoLi");
    newTodos.innerText = todo.content;
    if (todo.completed === false) {
      newTodos.classList.add("completeFilter");
    }

    //completedButtons
    const completedButtons = document.createElement("button");
    completedButtons.innerHTML = '<i class="fas fa-check"></i>';

    completedButtons.classList.add("completed-button");
    todoRepeats.appendChild(completedButtons);
    todoRepeats.appendChild(newTodos);

    //deleteButtons
    const deleteButtons = document.createElement("button");
    deleteButtons.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButtons.classList.add("deleted-button");
    todoRepeats.appendChild(deleteButtons);
    todoList.appendChild(todoRepeats);
  });
}

function removeTodoList(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }

  const indexOfTodo = todo.childNodes[0].innerText;
  todos.splice(todos.indexOf(indexOfTodo), 1);
  localStorage.setItem("todos", JSON.stringify(todos));
}




