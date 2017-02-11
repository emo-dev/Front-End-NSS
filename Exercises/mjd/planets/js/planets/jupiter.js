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

function outputTo(domElement) {
	return new Promise((resolve) => {
		getJupiter().then(
			(JupiterData) => {
				let planetHTML = planetTemplate.template(JupiterData.Jupiter);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};