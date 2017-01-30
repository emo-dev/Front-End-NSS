// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {
  	mozzarella: .50,
  	cheddar: 0.50,
  	parmesan: 0.60,
  	jack: 0.75,
  	swiss: 1.00
  };

  // Augment the original object with another method
  maker.addCheese = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);