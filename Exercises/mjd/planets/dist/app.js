(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	
	
	






},{"./planets/earth.js":2,"./planets/jupiter.js":3,"./planets/mars.js":4,"./planets/mercury.js":5,"./planets/neptune.js":6,"./planets/saturn.js":7,"./planets/uranus.js":8,"./planets/venus.js":9,"./template.js":10}],2:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getEarth = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Earth.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });
	    
	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getEarth());
		getEarth().then(
			(earthData) => {
				console.log("Earth data: ", earthData.Earth);
				let planetHTML = template(earthData.Earth, Object.keys(earthData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],3:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getJupiter = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Jupiter.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });
	    
	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getJupiter());
		getJupiter().then(
			(jupiterData) => {
				console.log("Jupiter data: ", jupiterData.Jupiter);
				let planetHTML = template(jupiterData.Jupiter, Object.keys(jupiterData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],4:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getMars = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Mars.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });
	    
	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getMars());
		getMars().then(
			(marsData) => {
				console.log("Mars data: ", marsData.Mars);
				let planetHTML = template(marsData.Mars, Object.keys(marsData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],5:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getMercury = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Mercury.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });

	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getMercury());
		getMercury().then(
			(mercuryData) => {
				console.log("Mercury data: ", mercuryData.Mercury);
				let planetHTML = template(mercuryData.Mercury, Object.keys(mercuryData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],6:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getNeptune = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Neptune.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });

	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getNeptune());
		getNeptune().then(
			(neptuneData) => {
				console.log("Neptune data: ", neptuneData.Neptune);
				let planetHTML = template(neptuneData.Neptune, Object.keys(neptuneData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],7:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getSaturn = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Saturn.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });

	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getSaturn());
		getSaturn().then(
			(saturnData) => {
				console.log("Saturn data: ", saturnData.Saturn);
				let planetHTML = template(saturnData.Saturn, Object.keys(saturnData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],8:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getUranus = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Uranus.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });

	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getUranus());
		getUranus().then(
			(uranusData) => {
				console.log("Uranus data: ", uranusData.Uranus);
				let planetHTML = template(uranusData.Uranus, Object.keys(uranusData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],9:[function(require,module,exports){
"use strict";

let planetTemplate = require('.././template.js');

let getVenus = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Venus.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });
	    
	});
};

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getVenus());
		getVenus().then(
			(venusData) => {
				console.log("Venus data: ", venusData.Venus);
				let planetHTML = template(venusData.Venus, Object.keys(venusData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};
},{".././template.js":10}],10:[function(require,module,exports){
"use strict";

let template = (data, dataName) => {

	let planetTemplate = ``;
	planetTemplate = 
		`<div id="${dataName}" class="planets hidden">
	        <div class="thumbnail">
	            <img src="${"images/" + dataName + ".jpeg"}">
	            <div class="caption">
	            <h3>${dataName}</h3>
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

module.exports = {template};
},{}]},{},[1]);
