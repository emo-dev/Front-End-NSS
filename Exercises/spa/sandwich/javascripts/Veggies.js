// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var veggiePrices = {
  	lettuce: .50,
  	tomato: 1.00,
  	pickles: .75,
  	peppers: .75,
  	onions: .50
  };

  // Augment the original object with another method
  maker.addVeggies = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);