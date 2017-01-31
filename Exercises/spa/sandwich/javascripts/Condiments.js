// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
  	ketchup: 0.10,
  	chiliSauce: 0.50,
  	mustard: 0.30,
  	mayonnaise: 0.25,
  	tabascoSauce: 0.75
  };

  // Augment the original object with another method
  maker.addCondiments = function(condimentValue) {
    console.log('youre doing the condiments');
    return condimentPrices[condimentValue];
  };

  maker.subtractCondiments = function(condimentValue) {
    return condimentPrices[condimentValue];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});