let tasks = [];

// Load saved tasks when page opens
let stored = localStorage.getItem("tasks");
if (stored) {
  tasks = JSON.parse(stored);
  tasks.forEach(task => addTaskToUI(task));
}

// Add button
let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Enter a task");
    return;
  }

  addTaskToUI(task);

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  input.value = "";
});

// Function to show task in UI
function addTaskToUI(task) {
  let li = document.createElement("li");
  li.innerText = task;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  delBtn.addEventListener("click", function () {
    li.remove();

    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  li.appendChild(delBtn);
  document.getElementById("list").appendChild(li);
}

// Clear all button
let clearBtn = document.getElementById("clearAll");

clearBtn.addEventListener("click", function () {
  document.getElementById("list").innerHTML = "";

  tasks = [];
  localStorage.removeItem("tasks");
});