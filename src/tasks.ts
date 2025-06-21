type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = [];

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input");
const taskListElement = document.querySelector<HTMLUListElement>(".list");

taskForm?.addEventListener("submit", function (event: SubmitEvent) {
  event.preventDefault();

  const taskDescription = formInput?.value;
  if (!taskDescription) {
    alert("Please enter a task description");
    return;
  }
  const newTask: Task = {
    description: taskDescription,
    isCompleted: false,
  };

  tasks.push(newTask);
  addTaskToDom(newTask);
  saveTasksToLocalStorage();
  formInput.value = '';
});

function addTaskToDom(task: Task) {
  const li = document.createElement("li");
  li.textContent = task.description;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.isCompleted;

  checkbox.addEventListener("change", function () {
    task.isCompleted = checkbox.checked;
    saveTasksToLocalStorage();
  });

  li.prepend(checkbox);
  taskListElement?.appendChild(li);
}

function saveTasksToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasksFromLocalStorage() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    const parsedTasks: Task[] = JSON.parse(storedTasks);
    parsedTasks.forEach((task) => {
      tasks.push(task);
      addTaskToDom(task);
    });
  }
}
loadTasksFromLocalStorage();
