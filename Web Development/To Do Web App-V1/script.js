var taskInput = document.getElementById("taskInput");
var taskList = document.getElementById("taskList");

function addTask() {
	var task = taskInput.value;
	if (task.trim()) {
		var listItem = document.createElement("li");
		var checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		checkBox.onclick = completeTask;
		var textNode = document.createTextNode(task);
		listItem.appendChild(checkBox);
		listItem.appendChild(textNode);
		taskList.appendChild(listItem);
		taskInput.value = "";
	}
}

function completeTask() {
	var listItem = this.parentNode;
	listItem.classList.toggle("done");
}

taskInput.addEventListener("keydown", function(event) {
	if (event.code === "Enter") {
		event.preventDefault();
		addTask();
	}
});
