"use strict";

var Acme = (function(Products) {


	Products.getProducts = () => {

		return new Promise((resolve, reject) => {
			let products = new XMLHttpRequest();

			products.addEventListener("load", function () {
				console.log("Loading products");
				Acme.setData("products", this.response);
				// myData[products] = this.response;
				resolve(Acme.getData());
			});

			products.addEventListener("error", function() {
				console.log("Error occured with products");
				reject("Error within products");
			});

			products.open("GET", "../jsonFiles/products.json");
			products.responseType ="json";

			window.setTimeout(function() {
				products.send();
			}, Math.random() * 2000);
		});
	};
	

	return Products;

})(Acme || {});






















