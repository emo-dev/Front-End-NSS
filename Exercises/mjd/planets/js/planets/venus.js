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