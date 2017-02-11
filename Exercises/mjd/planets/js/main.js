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


// loadingJson.loadData().then(
// 	(planetData) => {return earth.createEarth(planetsList);},
// 	(error) => error
// 		).then(
// 	(planetData) => {return mars.createMars(planetsList);},
// 	(error) => error;
// 		).then(
// 	(planetData) => {return venus.createVenus(planetsList);},
// 	(error) => error;
// 		).then(
// 	(planetData) => {return jupiter.createJupiter(planetsList);},
// 	(error) => error;
// 		)then(
// 	(planetData) => {return mercury.createMercury(planetsList);},	
// 	(error) => error;
// 		).then(
// 	(planetData) => {return neptune.createNeptune(planetsList);},
// 	(error) => error;
// 		).then(
// 	(planetData) => {return uranus.createUranus(planetsList);},
// 	(error) => error;
// );
	
	
	





