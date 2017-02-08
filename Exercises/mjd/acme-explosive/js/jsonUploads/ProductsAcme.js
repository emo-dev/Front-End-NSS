"use strict";

let data = require('../HoldData.js');

let getProducts = () => {

	return new Promise((resolve, reject) => {
		let products = new XMLHttpRequest();

		products.addEventListener("load", function () {
			console.log("Loading products");
			data.setData("products", this.response);
			// myData[products] = this.response;
			resolve(data.getData());
		});

		products.addEventListener("error", function() {
			console.log("Error occured with products");
			reject("Error within products");
		});

		products.open("GET", "../../jsonFiles/products.json");
		products.responseType ="json";

		window.setTimeout(function() {
			products.send();
		}, Math.random() * 2000);
	});
};


module.exports = {getProducts};



















