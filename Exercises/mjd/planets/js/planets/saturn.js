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

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getSaturn());
		getSaturn().then(
			(saturnData) => {
				console.log("Saturn data: ", saturnData.Saturn);
				let planetHTML = template(saturnData.Saturn, Object.keys(saturnData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};