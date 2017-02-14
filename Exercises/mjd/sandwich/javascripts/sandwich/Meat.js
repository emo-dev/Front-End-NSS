"use strict";

// Private variable to store the different meat prices
let meatPrices = {
	spicyChicken: 3,
	roastBeef: 4,
	blackForestHam: 4,
	pastrami: 5,
	turkey: 4.50
};

// Augment the original object with another method
let maker = (meatValue) => meatPrices[meatValue];

module.exports = {maker};
