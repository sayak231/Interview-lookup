const container = document.querySelector(".container");
var inputValue = document.querySelector(".input");
const add = document.querySelector(".add");

if (window.localStorage.getItem("todos") === null) {
  const todos = [];
  window.localStorage.setItem("todos", JSON.stringify(todos));
}

const todosEx = window.localStorage.getItem("todos");
const todos = JSON.parse(todosEx);

const createItem = (name) => {
  const itemBox = document.createElement("div");
  itemBox.classList.add("item");

  const input = document.createElement("input");
  input.type = "text";
  input.disabled = true;
  input.value = name;
  input.classList.add("item_input");

  const edit = document.createElement("button");
  edit.innerHTML = "EDIT";
  edit.classList.add("edit");
  edit.addEventListener("click", () => {
    editItem(input, name);
  });

  const remove = document.createElement("button");
  remove.innerHTML = "REMOVE";
  remove.classList.add("remove");
  remove.addEventListener("click", () => {
    removeItem(itemBox, name);
  });

  container.appendChild(itemBox);
  itemBox.appendChild(input);
  itemBox.appendChild(edit);
  itemBox.appendChild(remove);
};

const removeItem = (itemBox, name) => {
  itemBox.parentNode.removeChild(itemBox);
  const index = todos.indexOf(name);
  todos.splice(index, 1);
  window.localStorage.setItem("todos", JSON.stringify(todos));
};

const editItem = (input, name) => {
  input.disabled = !input.disabled;
  const index = todos.indexOf(name);
  todos[index] = input.value;
  window.localStorage.setItem("todos", JSON.stringify(todos));
};

const check = () => {
  if (inputValue.value !== "") {
    createItem(inputValue.value);
    todos.push(inputValue.value);
    window.localStorage.setItem("todos", JSON.stringify(todos));
    inputValue.value = "";
  }
};

add.addEventListener("click", check);
window.addEventListener("keydown", (e) => {
  if (e.which == 13) {
    check();
  }
});

for (const todo of todos) {
  createItem(todo);
}
