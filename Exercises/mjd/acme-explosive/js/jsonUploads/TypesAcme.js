"use strict";

let data = require('../HoldData.js');

let getTypes = () => {

	return new Promise((resolve, reject) => {
		let types = new XMLHttpRequest();

		types.addEventListener("load", function () {
			console.log("Loading types");
			data.setData("types", this.response);
			// myData[types] = this.response;
			resolve();
		});

		types.addEventListener("error", function() {
			console.log("Error occured with types");
			reject("Error within types");
		});

		types.open("GET", "../../jsonFiles/types.json");
		types.responseType ="json";

		window.setTimeout(function() {
			types.send();
		}, Math.random() * 2000);
	});
};

module.exports = {getTypes};








