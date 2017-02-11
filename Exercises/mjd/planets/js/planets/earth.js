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

function outputTo(domElement) {
	return new Promise((resolve) => {
		console.log(getEarth());
		getEarth().then(
			(earthData) => {
				console.log("Earth data: ", earthData.Earth);
				let planetHTML = planetTemplate.template(earthData.Earth);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};