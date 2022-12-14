/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint quotes: ["error", "double", { "avoidEscape": true }] */
const testFunc = (a, b) => a + b;
let todos = JSON.parse(localStorage.getItem("todos")) || []; // eslint-disable-line

const getTodos = () => {
  const listGroup = document.querySelector(".todo-list-group");
  const todoElement = todos
    .map(
      (item) => `
        <li class="todo-list todo-item" id=${item.index}>
          ${
            item.completed === true
              ? `
            <i class="fa-solid fa-check checked-icon"></i>`
              : '<i class="fa-solid fa-square unchecked-icon"></i>'
          }
          <input type="text" class=${
            item.completed === true ? "decoration edit-todo" : "edit-todo"
          }  value="${item.description}">
          <span class="edit-focus-element"></span>
          <i class="fa-solid fa-ellipsis-vertical more-icon"></i>
          <i class="fa-solid fa-trash delete-icon" style="color:"orangered"></i>
        </li>`
    )
    .join("");
  listGroup.innerHTML = todoElement;
  return listGroup;
};
const updateUI = (data) => {
  if (data) todos = data;
  getTodos();
};

const addTodos = (newTask) => {
  const newTodo = {
    description: newTask,
    completed: false,
    index: todos.length + 1,
  };
  todos.push(newTodo);
  localStorage.setItem("todos", JSON.stringify(todos));
  getTodos();
};

const editTodos = ({ index, inputValue }) => {
  todos[index - 1].description = inputValue;
  localStorage.setItem("todos", JSON.stringify(todos));
};

const deleteTodos = (targetIndex) => {
  todos = todos
    .filter((item) => +item.index !== +targetIndex)
    .map((item, index) => {
      item.index = index + 1;
      return item;
    });
  localStorage.setItem("todos", JSON.stringify(todos));
  getTodos();
};

export {
  getTodos,
  addTodos,
  editTodos,
  deleteTodos,
  todos,
  updateUI,
  testFunc,
};
