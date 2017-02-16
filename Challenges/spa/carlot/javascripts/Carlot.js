'use strict';

var CarLot = (function() {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function (event) {

      	var carData = JSON.parse(event.target.responseText);
      	console.log("Car Data: ", carData);
      	callback(carData);
      });

      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();

    }
  };

})(CarLot || {});