"use strict";

// Private variable to store the different condiment prices
let condimentPrices = {
	ketchup: 0.10,
	chiliSauce: 0.50,
	mustard: 0.30,
	mayonnaise: 0.25,
	tabascoSauce: 0.75
};

// Augment the original object with another method


let maker = (condimentValue) => condimentPrices[condimentValue];


module.exports = {maker};

