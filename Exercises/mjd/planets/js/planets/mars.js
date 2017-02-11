"use strict";

let planetTemplate = require('.././template.js');

let getMars = () => {
	return new Promise((resolve, reject) => {

		$.ajax({
	      url: "../../jsonn/Mars.json"
	    }).done(function(songData) {
	      resolve(songData);
	    }).fail(function(error) {
	      reject(error);
	    });
	    
	});
};

function outputTo(domElement) {
	return new Promise((resolve) => {
		getMars().then(
			(marsData) => {
				console.log("mars-data", marsData.Mars);
				let planetHTML = planetTemplate.template(marsData.Mars);
				$('.planets-list').append(planetHTML);
				resolve();
			}
		);
	})	;
}

module.exports = {outputTo};