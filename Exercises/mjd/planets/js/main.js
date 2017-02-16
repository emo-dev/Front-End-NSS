"use strict";


let earth = require('./planets/earth.js');
let mars = require('./planets/mars.js');
let venus = require('./planets/venus.js');
let jupiter = require('./planets/jupiter.js');
let neptune = require('./planets/neptune.js');
let saturn = require('./planets/saturn.js');
let uranus = require('./planets/uranus.js');
let mercury = require('./planets/mercury.js');

let planetTemplate = require('./template.js');

let planetsList = $('#planets-list');

earth.outputTo(planetsList, planetTemplate.template).then(
	() => mars.outputTo(planetsList, planetTemplate.template),
	(error) => error
		).then(
	() => venus.outputTo(planetsList, planetTemplate.template),
	(error) => error
		).then(
	() => jupiter.outputTo(planetsList, planetTemplate.template),
	(error) => error
		).then(
	() => mercury.outputTo(planetsList, planetTemplate.template),	
	(error) => error
		).then(
	() => neptune.outputTo(planetsList, planetTemplate.template),
	(error) => error
		).then(
	() => uranus.outputTo(planetsList, planetTemplate.template),
	(error) => error
		).then(
	() => saturn.outputTo(planetsList, planetTemplate.template),
	(error) => error
);

let addClassToCurrentPlanet = function(somePlanet) {
	document.getElementById(currentPlanet).classList.add("hidden");
};
let currentPlanet = "something";
$('.btn').click(function(event) {
	console.log("you clicked: ", $(this).html());
	let targetId = $(this).html();
	console.log(targetId);
	let myPlanet = document.getElementById(targetId);
	if (currentPlanet !== "something") {
		addClassToCurrentPlanet(myPlanet);
	}
	myPlanet.classList.remove("hidden");
	console.log(myPlanet);
	currentPlanet = targetId;
});
	
	
	





