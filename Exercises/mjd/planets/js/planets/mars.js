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

function outputTo(domElement, template) {
	return new Promise((resolve) => {
		console.log(getMars());
		getMars().then(
			(marsData) => {
				console.log("Mars data: ", marsData.Mars);
				let planetHTML = template(marsData.Mars, Object.keys(marsData)[0]);
				$(domElement).append(planetHTML);
				resolve();
			}
		);
	});
}

module.exports = {outputTo};