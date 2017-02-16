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