"use strict";

var Acme = (function(Categories) {


	Categories.getCategories = (variableName) => {
		return new Promise((resolve, reject) => {
			let categories = new XMLHttpRequest();

			categories.addEventListener("load", function () {
				console.log("Loading " + variableName);
				Acme.setData(variableName, this.response);
				// myData[variableName] = this.response;
				resolve();
			});

			categories.addEventListener("error", function() {
				console.log("Error occured with " + variableName);
				reject("Error within " + variableName);
			});

			categories.open("GET", "../jsonFiles/categories.json");

			window.setTimeout(function() {
				categories.send();
			}, Math.random() * 2000);
		});
	};
	

	return Categories;

})(Acme || {});






















