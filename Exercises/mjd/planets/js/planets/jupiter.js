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