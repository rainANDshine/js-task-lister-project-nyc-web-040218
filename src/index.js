document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
});

<<<<<<< HEAD
let count = 0;

document.getElementById('create-list-form').addEventListener('submit', function(e) {
=======
const form = document.getElementById('create-list-form');

form.addEventListener('submit', function(e) {
>>>>>>> 65e58fc14b17bfebbb28178444eb2fc509201593
  e.preventDefault();

  const app = document.getElementById('app-content')
  if (!app.innerHTML) {
<<<<<<< HEAD
    app.innerHTML = createTaskForm;
=======
    app.innerHTML = taskForm;
>>>>>>> 65e58fc14b17bfebbb28178444eb2fc509201593
  }

  const input = document.getElementById('new-list-title');

  // add task form and drop down
  const select = document.getElementById('parent-list');
  const option = document.createElement('option');
  option.text = input.value;
  select.add(option);
  select.value = option.text;

<<<<<<< HEAD
  // add list name
=======
  // add list
>>>>>>> 65e58fc14b17bfebbb28178444eb2fc509201593
  if (!document.getElementById('lists')) {
    const lists = document.createElement('div');
    lists.setAttribute("id", "lists");
    document.body.appendChild(lists);
  }

<<<<<<< HEAD
  const list = createListName(input.value);
  lists.innerHTML += list;

  input.value = "";
});

// add task description and priority
document.addEventListener('submit', function(e) {
  if (e.target.id === 'create-task-form') {
    e.preventDefault();

    const select = document.getElementById('parent-list');
    const h2s = document.getElementsByTagName('h2');
    const list = [...h2s].find(name => name.innerText.split(" ")[0] === select.value);
    const ul = list.nextElementSibling;
    const task = document.getElementById('new-task-description');
    const priority = document.getElementById('new-task-priority');
    ul.innerHTML += createList(select.value, task.value, priority.value);
    task.value = "";
    priority.value = "";
    //console.log(++count);
  }
});

// delete
document.addEventListener('click', function(e) {
  if (e.target.className === "delete-list") {
    e.target.parentNode.parentNode.remove();
  } else if (e.target.className === "delete-task") {
    e.target.parentNode.remove();
  }
});

const createTaskForm =
=======
  const list = createList(input.value);
  lists.innerHTML += list;

  // remove lists
  lists.childNodes.forEach(child => child.addEventListener('click', function() {
    this.remove();
    document.getElementById('parent-list').remove(option);
  }));

  input.value = "";
});

const taskForm =
>>>>>>> 65e58fc14b17bfebbb28178444eb2fc509201593
  `<form id="create-task-form">
     <label for="parent-list">Select List:</label>
     <select id="parent-list">
     </select>

     <label for="new-task-description">Task description:</label>
     <input required type="text" id="new-task-description" placeholder="description">

     <label for="new-task-priority">Priority level:</label>
     <input type="text" id="new-task-priority" placeholder="priority">
     <input type="submit" value="Create New Task">
   </form>`;

<<<<<<< HEAD
const createListName = (name) => (
=======
const createList = (name) => (
>>>>>>> 65e58fc14b17bfebbb28178444eb2fc509201593
  `<div>
    <h2>${name}
      <button data-title="${name}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
    </ul>
  </div>`);
<<<<<<< HEAD

const createList = (name, task, priority) => (
  `<li>
    Task: ${task}
    <button data-list-title="${name}" data-task-name="${task}" class="delete-task">
        X
    </button>
    <br>
    Priority: ${priority}
  </li>`);
=======
>>>>>>> 65e58fc14b17bfebbb28178444eb2fc509201593
