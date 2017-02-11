(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

let planetData;

let loadData = () => {
	return new Promise((resolve, reject) => {
		$.ajax({url: "../../planets.json"})
				.done((songData) => {
					console.log(songData);
					planetData = songData;
					resolve(songData);})
				.fail((error) => reject(error));
		
	});
};

let getData = () => planetData;

module.exports = {loadData, getData};



},{}],2:[function(require,module,exports){
"use strict";

let template = (data) => {

	let planetTemplate = ``;
	planetTemplate = 
		`<div id="${data.Name}" class="col-sm-6 col-md-4 col-md-4-offset-4 hidden">
	        <div class="thumbnail">
	            <img src="${data.Image}">
	            <div class="caption">
	            <h3>${data.Name}</h3>
	            <ul>
		            <li>${data.Discovered}</li>
		            <li>Mass: ${data.Mass}, Diameter: ${data.Diameter}</li>
		            <li>Distance from the Sun: ${data.DFTS}</li>
		            <li>Atmosphere composition: ${data["Atmosphere Comp"]}</li>
		            <li>${data.Satellites}</li>
		            <li>Probes (if any): ${data.Visited}</li>
	            </ul>
	          </div>
	        </div>
	    </div>`;
	return planetTemplate;
};

module.exports = template;
},{}],3:[function(require,module,exports){
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
	
	
	






},{"./loadJSON/loadingJson.js":1,"./planets/earth.js":4,"./planets/jupiter.js":5,"./planets/mars.js":6,"./planets/neptune.js":7,"./planets/saturn.js":8,"./planets/uranus.js":9,"./planets/venus.js":10}],4:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Earth") {
				let planetHTML = planetTemplate.template(planet);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}],5:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Jupiter") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}],6:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Mars") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}],7:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Neptune") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}],8:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Saturn") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}],9:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Uranus") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}],10:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Venus") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;
},{".././loadJSON/loadingJson.js":1,".././loadJSON/template.js":2}]},{},[3]);
