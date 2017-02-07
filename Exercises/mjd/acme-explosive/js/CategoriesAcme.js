"use strict";

var Acme = (function(Categories) {


	Categories.getCategories = () => {

		return new Promise((resolve, reject) => {
			let categories = new XMLHttpRequest();

			categories.addEventListener("load", function () {
				console.log("Loading categories");
				Acme.setData("categories", this.response);
				// myData[variableName] = this.response;
				resolve();
			});

			categories.addEventListener("error", function() {
				console.log("Error occured with categories");
				reject("Error within categories");
			});

			categories.open("GET", "../jsonFiles/categories.json");
			categories.responseType ="json";

			window.setTimeout(function() {
				categories.send();
			}, Math.random() * 2000);
		});
	};
	

	return Categories;

})(Acme || {});






















