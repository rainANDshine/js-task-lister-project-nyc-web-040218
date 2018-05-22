document.addEventListener('DOMContentLoaded', () => {
  // your solution here
  // grab DOM elements
  const listDiv = document.getElementById("app-content");

  const app = new TaskLister();
});

const form = document.getElementById('create-list-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const app = document.getElementById('app-content')
  if (!app.innerHTML) {
    app.innerHTML = taskForm;
  }

  const input = document.getElementById('new-list-title');

  // add task form and drop down
  const select = document.getElementById('parent-list');
  const option = document.createElement('option');
  option.text = input.value;
  select.add(option);
  select.value = option.text;

  // add list
  if (!document.getElementById('lists')) {
    const lists = document.createElement('div');
    lists.setAttribute("id", "lists");
    document.body.appendChild(lists);
  }

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

const createList = (name) => (
  `<div>
    <h2>${name}
      <button data-title="${name}" class="delete-list">
        X
      </button>
    </h2>
    <ul>
    </ul>
  </div>`);
