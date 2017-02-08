"use strict";

let categories = require('./jsonUploads/CategoriesAcme.js');
let types = require('./jsonUploads/TypesAcme.js');
let products = require('./jsonUploads/ProductsAcme.js');

let myData = require('./HoldData.js');
let categoryCards = require('./domHandling/setCategories.js');

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