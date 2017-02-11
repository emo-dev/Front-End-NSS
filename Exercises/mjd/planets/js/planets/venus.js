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

function outputTo(domElement) {
	return new Promise((resolve) => {
		getVenus().then(
			(VenusData) => {
				let planetHTML = planetTemplate.template(VenusData.Venus);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};