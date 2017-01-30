// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	spicyChicken: 3.00,
  	roastBeef: 4.00,
  	blackForestHam: 4.00,
  	pastrami: 5.00,
  	turkey: 4.50
  };

  // Augment the original object with another method
  maker.addMeat = function(meatType) {
    return meatPrices[meatType];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker);