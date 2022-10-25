
  

let filterSpan = document.querySelector(".filter-span");




  function countNotCompleted() {
    let todos;
    let count = 0;
    if (localStorage.getItem("todos") === null) {
      filterSpan.innerText = `No tasks left`;
    } else {
      todos = JSON.parse(localStorage.getItem("todos"));
      todos.forEach(function (todo) {
        if (todo.completed === true) {
          count++;
        }
      });
      filterSpan.innerText = `${count} tasks left`;
    }
  }

  export{filterSpan, countNotCompleted}