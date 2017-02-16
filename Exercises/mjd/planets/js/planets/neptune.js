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

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getNeptune());
		getNeptune().then(
			(neptuneData) => {
				console.log("Neptune data: ", neptuneData.Neptune);
				let planetHTML = template(neptuneData.Neptune, Object.keys(neptuneData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};