"use strict";

// Private variable to store the different bread prices
let breadPrices = {
	artisan: 2,
	flatbread: 3,
	wholeGrain: 4,
	glutenFree: 4.50,
	ciabatta: 5.00
};

// Augment the original object with another method


let maker = (breadValue) => breadPrices[breadValue];

module.exports = {maker};