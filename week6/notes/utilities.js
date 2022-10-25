

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

  
  export{countClick}