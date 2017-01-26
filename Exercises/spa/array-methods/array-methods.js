var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
for (var planet in planets) {
	document.getElementById("planets").innerHTML += planets[planet] + " ";
}

var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanets = planets.map(function(planet){
	var newPlanet = new Array(...planet);
	var lowerPlanet = newPlanet.shift();
	var upperPlanet = lowerPlanet.toUpperCase();
	newPlanet.unshift(upperPlanet);
	planet = newPlanet.join("");
	return planet;
});

console.log("Capitalized the first letter "; capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
function checkForE(planet) {
	var arrayedPlanet = new Array(...planet);
	var flag = false;
	for (var letter in arrayedPlanet) {
		if (arrayedPlanet[letter].toLowerCase() === "e") {
			flag = true
		}
	} 
	return flag;
}
var filteredPlanets = capPlanets.filter(checkForE);
console.log(filteredPlanets);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

var newSentence = words.reduce(
	function(total, word){return total + " " + word}
);

console.log(newSentence);






