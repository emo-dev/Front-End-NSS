'use strict';

var CarLot = (function() {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
  	  inventoryLoader.open("GET", "inventory.json");
  	  inventoryLoader.send();

      inventoryLoader.addEventListener("load", function (event) {
      	console.log("Data Loading is complete.");
      	var carData = JSON.parse(event.target.responseText);
      	console.log("Car Data: ", carData);
      	callback(carData);
      })
    }
  };

})(CarLot || {});