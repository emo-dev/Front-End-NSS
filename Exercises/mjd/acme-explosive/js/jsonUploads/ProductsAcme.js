"use strict";


/*

Requires for the page
*/

let data = require('../HoldData.js');


/*

This function makes an XMLHttpRequest for 
products.json
It takes the parsed Json and stores it within an object 
at HoldData.js
*/

let getProducts = () => {

	return new Promise((resolve, reject) => {
		let products = new XMLHttpRequest();

		products.addEventListener("load", function () {
			console.log("Loading products at ProductsAcme.js");
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
		}, 1000);
	});
};


module.exports = {getProducts};

