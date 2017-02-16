"use strict";

// Private variable to store the different cheese prices
let cheesePrices = {
	mozzarella: 0.50,
	cheddar: 0.50,
	parmesan: 0.60,
	jack: 0.75,
	swiss: 1.00
};

// Augment the original object with another method

let maker = (cheeseValue) => cheesePrices[cheeseValue];


module.exports = {maker};
