"use strict";

// Private variable to store the different meat prices
let veggiePrices = {
	lettuce: 0.50,
	tomato: 1,
	pickles: 0.75,
	peppers: 0.75,
	onions: 0.50
};

// Augment the original object with another method

let maker = (veggieValue) => veggiePrices[veggieValue];


module.exports = {maker};