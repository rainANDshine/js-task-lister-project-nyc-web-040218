document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
});

document.getElementById('create-list-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const app = document.getElementById('app-content')
  if (!app.innerHTML) {
    app.innerHTML = createTaskForm;
  }

  const input = document.getElementById('new-list-title');

  // add task form and drop down
  const select = document.getElementById('parent-list');
  const option = document.createElement('option');
  option.text = input.value;
  select.add(option);
  select.value = option.text;

  // add list name
  if (!document.getElementById('lists')) {
    const lists = document.createElement('div');
    lists.setAttribute("id", "lists");
    document.body.appendChild(lists);
  }

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
    debugger;
    const task = document.getElementById('new-task-description');
    const priority = document.getElementById('new-task-priority');
    if (!priority.value) {
      priority.value = 'low';
    }
    ul.innerHTML += createList(select.value, task.value, priority.value);
    task.value = "";
    priority.value = "";
  }
});

// delete
document.addEventListener('click', function(e) {
  if (e.target.className === "delete-list") {
    e.target.parentNode.parentNode.remove();
    const select = document.getElementById('parent-list');
    select.remove(select.value);
  } else if (e.target.className === "delete-task") {
    e.target.parentNode.remove();
  }
});

const createTaskForm =
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

const createListName = (name) => (
  `<div>
    <h2>${name}
      <button data-title="${name}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
    </ul>
  </div>`);

const createList = (name, task, priority) => (
  `<li>
    Task: ${task}
    <button data-list-title="${name}" data-task-name="${task}" class="delete-task">
        X
    </button>
    <br>
    Priority: ${priority}
  </li>`);
