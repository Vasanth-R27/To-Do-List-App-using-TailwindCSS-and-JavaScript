let button = document.getElementById("add");
let todoList = document.getElementById("todoList");
let input = document.getElementById("input");

let todos = [];

button.addEventListener("click", () => {
  todos.push(input.value);
  addtodo(input.value);
  input.value = "";
});

function addtodo(todo) {
  let para = document.createElement("p");
  para.innerText = todo;
  todoList.appendChild(para);
  // single-click---it will strike the task
  para.addEventListener("click", () => {
    para.style.textDecoration = "line-through";
    remove(todo);
  });
  // double-click---delete the task
  para.addEventListener("dblclick", () => {
    todoList.removeChild(para);
    remove(todo);
  });
}

function remove(todo) {
  let index = todos.indexOf(todo);
  if (index > -1) todos.splice(index, 1);
}
