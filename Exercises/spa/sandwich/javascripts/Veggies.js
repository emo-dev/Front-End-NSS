// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	lettuce: 0.50,
  	tomato: 1,
  	pickles: 0.75,
  	peppers: 0.75,
  	onions: 0.50
  };

  // Augment the original object with another method
  maker.addVeggies = function(veggieValue) {
    console.log('youre doing the veggies');
    return veggiePrices[veggieValue];
  };

  maker.subtractVeggies = function(veggieValue) {
    return veggiePrices[veggieValue];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});