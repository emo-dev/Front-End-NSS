var inputField = document.getElementById("userInput");
var createButton = document.getElementById("create");
var deleteButton = document.getElementById("delete");
var parent = document.getElementById("parentDiv");



var theInput = '';
var allInputsCreated = [];



function moveInput() {
	theInput = inputField.value;
	inputField.value = '';
	return;
}

function deleteCard() {
	var dad = event.target.parentNode;
	dad.remove();
}

function deleteAll() {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	};
}

function createCard() {
	var child = document.createElement("div");
	child.className = "childDiv";

	var heading = document.createElement("h3");
	heading.innerHTML = theInput;
	heading.className = "theHeadings";

	var newButton = document.createElement("button");
	newButton.innerHTML = "Delete";
	newButton.className = "cardDelete";
	newButton.addEventListener("click", deleteCard);

	child.appendChild(heading);
	child.appendChild(newButton);
	parent.appendChild(child);
}

inputField.addEventListener("change", moveInput);
createButton.addEventListener("click", createCard);
deleteButton.addEventListener("click", deleteAll);


















