"use strict";

var Acme = (function(Products) {


	Products.getProducts = (variableName) => {
		return new Promise((resolve, reject) => {
			let products = new XMLHttpRequest();

			products.addEventListener("load", function () {
				console.log("Loading " + variableName);
				Acme.setData(variableName, this.response);
				// myData[variableName] = this.response;
				resolve();
			});

			products.addEventListener("error", function() {
				console.log("Error occured with " + variableName);
				reject("Error within " + variableName);
			});

			products.open("GET", "../jsonFiles/products.json");

			window.setTimeout(function() {
				products.send();
			}, Math.random() * 2000);
		});
	};
	

	return Products;

})(Acme || {});






















