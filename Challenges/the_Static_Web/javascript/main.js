var input1 = document.getElementById("heightOfTree");
var input2 = document.getElementById("treeCharacter");

var myTree = {};

function heightInput() {
	var userHeight = parseInt(document.getElementById("heightOfTree").value);
	myTree.height = userHeight;
	console.log(myTree.height);
	return;
}
function characterInput() {
	var userCharacter = document.getElementById("treeCharacter").value;
	myTree.character = userCharacter;
	console.log(myTree.character);
	return;
}

function treeFunction(someTree) { 
	if (someTree.height === undefined || someTree.character === undefined) {
		alert("Both fields must have a value.")
	} else {
		console.log(someTree.height);
		var numOfCharacters = '';
		var numOfSpaces = someTree.height;
		for (var i = someTree.height; i >= 0; i--) {
			if (i === 0) {
				break;
			} else {
				var spaces = " ".repeat(numOfSpaces);
				var characters = someTree.character.repeat(numOfCharacters);
				console.log(spaces + someTree.character + numOfCharacters);
				numOfSpaces -= 1;
				numOfCharacters += someTree.character + someTree.character;
			}
		}
		console.log("What a lovely tree.")
	}
	return false;
};

var mouse = false;
function checkForMouse(n) {
	mouse = n;
}

function checkKeyUp(event) {
	if (event.keyCode == 13 && mouse == true) {
		treeFunction(myTree);
	}
}

document.getElementById("heightOfTree").addEventListener("keydown", checkKeyUp);
document.getElementById("treeCharacter").addEventListener("keydown", checkKeyUp);




