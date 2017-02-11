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

function outputTo(domElement) {
	return new Promise((resolve) => {
		getSaturn().then(
			(SaturnData) => {
				let planetHTML = planetTemplate.template(SaturnData.Saturn);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};