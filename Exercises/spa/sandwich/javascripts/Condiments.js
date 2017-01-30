// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {
  	ketchup: .10,
  	chiliSauce: .50,
  	mustard: .30,
  	mayonnaise: .25,
  	tabascoSauce: .75
  };

  // Augment the original object with another method
  maker.addCondiments = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);