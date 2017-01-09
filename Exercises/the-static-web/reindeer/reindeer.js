var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

var fullNames = [];
for (var i = 0; i < reindeer.length; i++) {
	fullNames.push(colors[i] + " " + reindeer[i]);
}

function listingShiz() {
	for (var i = 0; i < fullNames.length; i++) {
		var newListItem = document.createElement("li");
		newListItem.innerHTML = fullNames[i];
		// var numberListValue = document.createTextNode(i);
		hohohoElement.appendChild(newListItem);
	}
}

console.log(fullNames);

listingShiz();
