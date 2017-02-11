"use strict";


let earth = require('./planets/earth.js');
let mars = require('./planets/mars.js');
let venus = require('./planets/venus.js');
let jupiter = require('./planets/jupiter.js');
let mercury = require('./planets/neptune.js');
let neptune = require('./planets/saturn.js');
let uranus = require('./planets/uranus.js');

let loadingJson = require('./loadJSON/loadingJson.js');

let planetsList = $('.planets-list');


loadingJson.loadData().then(
	() => {return earth.outputTo(planetsList);},
	(error) => error
		).then(
	() => {return mars.outputTo(planetsList);},
	(error) => error
		).then(
	() => {return venus.outputTo(planetsList);},
	(error) => error
		).then(
	() => {return jupiter.outputTo(planetsList);},
	(error) => error
		).then(
	() => {return mercury.outputTo(planetsList);},	
	(error) => error
		).then(
	() => {return neptune.outputTo(planetsList);},
	(error) => error
		).then(
	() => {return uranus.outputTo(planetsList);},
	(error) => error
);
	
	
	





