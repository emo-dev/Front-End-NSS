"use strict";


let earth = require('./planets/earth.js');
let mars = require('./planets/mars.js');
let venus = require('./planets/venus.js');
let jupiter = require('./planets/jupiter.js');
let neptune = require('./planets/neptune.js');
let saturn = require('./planets/saturn.js');
let uranus = require('./planets/uranus.js');
let mercury = require('./planets/mercury.js');

let planetsList = $('.planets-list');

earth.outputTo(planetsList).then(
	() => mars.outputTo(planetsList),
	(error) => error
		).then(
	() => venus.outputTo(planetsList),
	(error) => error
		).then(
	() => jupiter.outputTo(planetsList),
	(error) => error
		).then(
	() => mercury.outputTo(planetsList),	
	(error) => error
		).then(
	() => neptune.outputTo(planetsList),
	(error) => error
		).then(
	() => uranus.outputTo(planetsList),
	(error) => error
		).then(
	() => saturn.outputTo(planetsList),
	(error) => error
);
	
	
	





