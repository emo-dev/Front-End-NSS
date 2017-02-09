"use strict";


/*

Requires for the file.
*/

let data = require('../HoldData.js');


/*

This function makes an XMLHttpRequest for 
types.json
It takes the parsed Json and stores it within an object 
at HoldData.js
*/

let getTypes = () => {

	return new Promise((resolve, reject) => {
		let types = new XMLHttpRequest();

		types.addEventListener("load", function () {
			console.log("Loading types at TypesAcme.js");
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
		}, 1000);
	});
};


module.exports = {getTypes};

