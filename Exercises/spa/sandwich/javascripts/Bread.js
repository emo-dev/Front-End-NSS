// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrices = {
  	artisan: 2,
  	flatbread: 3,
  	wholeGrain: 4,
  	glutenFree: 4.50,
  	ciabatta: 5.00
  };

  // Augment the original object with another method
  maker.addBread = function(breadValue) {
    console.log('youre doing the bread');
    return breadPrices[breadValue];
  };

  maker.subtractBread = function(breadValue) {
    return breadPrices[breadValue];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});