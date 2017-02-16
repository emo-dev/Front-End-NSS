"use strict";


/*

Requires for the page
*/

let categories = require('./jsonUploads/CategoriesAcme.js');
let types = require('./jsonUploads/TypesAcme.js');
let products = require('./jsonUploads/ProductsAcme.js');

let myData = require('./HoldData.js');
let categoryCards = require('./domHandling/setCategories.js');


/*

This function sets up a promise chain to: 
	
	1. Retrieve and parse categories.json file
	2. Retrieve and parse types.json file
	3. Retrieve and parse products.json file
	4. Set up initial DOM structure by using category information

The data retrieved from the json files is stored as objects
within HoldData.js
*/

function fireworks() {

	return new Promise((resolve) => {

		categories.getCategories().then(
			() => {return types.getTypes();},
			(errorMessage) => console.error(errorMessage)
		).then(
			() => {return products.getProducts();},
			(errorMessage) => console.error(errorMessage)
		).then(
			() => {return categoryCards.setCategories(myData.getData());}
		);

	});
}

module.exports = {fireworks};

