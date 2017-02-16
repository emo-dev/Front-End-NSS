"use strict";


/*

Requires for the page
*/

let data = require('../HoldData.js');


/*

This function makes an XMLHttpRequest for 
categories.json
It takes the parsed Json and stores it within an object 
at HoldData.js
*/

let getCategories = () => {

	return new Promise((resolve, reject) => {
		let categories = new XMLHttpRequest();

		categories.addEventListener("load", function () {
			console.log("Loading categories at CategoriesAcme.js.");
			data.setData("categories", this.response);
			// myData[variableName] = this.response;
			resolve();
		});

		categories.addEventListener("error", function() {
			console.log("Error occured with categories");
			reject("Error within categories");
		});

		categories.open("GET", "../../jsonFiles/categories.json");
		categories.responseType ="json";

		window.setTimeout(function() {
			categories.send();
		}, 1000);
	});
};


module.exports = {getCategories};
	
