// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {
  	spicyChicken: 3,
  	roastBeef: 4,
  	blackForestHam: 4,
  	pastrami: 5,
  	turkey: 4.50
  };

  // Augment the original object with another method
  maker.addMeat = function(meatValue) {
    console.log(meatPrices[meatValue]);
    return meatPrices[meatValue];
  };

  maker.subtractMeat = function(meatValue) {
    return meatPrices[meatValue];
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});