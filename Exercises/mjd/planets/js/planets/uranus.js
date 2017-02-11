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

function outputTo(domElement) {
	return new Promise((resolve) => {
		getUranus().then(
			(UranusData) => {
				let planetHTML = planetTemplate.template(UranusData.Uranus);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};