"use strict";

let planetTemplate = require('.././loadJSON/template.js');
let data = require('.././loadJSON/loadingJson.js');

function outputTo(domElement) {
	return new Promise((resolve) => {
		let planetData = data.getData();
		planetData.forEach(function(planet) {
			if (planet.Name === "Mercury") {
				let planetHTML = planetTemplate.template(planet);
				$(domElement).append(planetHTML);
				resolve();
			}
		});		
	});
}

module.exports = outputTo;