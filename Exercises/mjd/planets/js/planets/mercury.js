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