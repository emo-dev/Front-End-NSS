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