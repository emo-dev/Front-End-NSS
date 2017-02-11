"use strict";

let planetTemplate = require('.././template.js');

let getNeptune = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Neptune.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });

	});
};

function outputTo(domElement) {
	return new Promise((resolve) => {
		getNeptune().then(
			(NeptuneData) => {
				let planetHTML = planetTemplate.template(NeptuneData.Neptune);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};