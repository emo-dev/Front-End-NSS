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

function outputTo(domElement) {
	return new Promise((resolve) => {
		getMercury().then(
			(MercuryData) => {
				let planetHTML = planetTemplate.template(MercuryData.Mercury);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};