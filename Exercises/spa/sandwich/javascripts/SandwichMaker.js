var SandwichMaker = (function() {

  // Private variable to store the price
  var totalPrice = 0;


  // Return the public interface that other code can interact with
  return {
    addTopping: function(toppingPrice, container) {
      container[5].checked = false;
      totalPrice += toppingPrice;

      var finalPriceDOM = document.getElementById("finalCost");
      finalPriceDOM.innerHTML = "$" + totalPrice;
      console.log(totalPrice);
    },

    subtractFromTotal: function(checkedItemsObject) {

		checkedItemsObject.value.forEach(function(foodValue) {

			console.log(totalPrice);

	    	switch (checkedItemsObject.name) {
				case "bread": 
					var breadPrice = SandwichMaker.subtractBread(foodValue);
					totalPrice -= breadPrice;
					console.log(totalPrice);
					break;
				case "meat": 
					var meatPrice = SandwichMaker.subtractMeat(foodValue);
					totalPrice -= meatPrice;
					console.log(totalPrice);
					break;
				case "cheese":
					var cheesePrice = SandwichMaker.subtractCheese(foodValue);
					totalPrice -= cheesePrice;
					console.log(totalPrice);
					break;
				case "veggies":
					var veggiePrice = SandwichMaker.subtractVeggies(foodValue);
					totalPrice -= veggiePrice;
					console.log(totalPrice);
					break;
				case "condiments":
					var condimentPrice = SandwichMaker.subtractCondiments(foodValue);
					totalPrice -= condimentPrice;
					console.log(totalPrice);
					break;
			}
		});

		var finalPriceDOM = document.getElementById("finalCost");
		finalPriceDOM.innerHTML = "$" + totalPrice;
    },

	gatherPrices: function() {
		var checkedItems = {};
		checkedItems.value = [];

		
		var elementName = event.target.name;
		checkedItems.name = elementName;
		var sandwichContainer = document.getElementsByName(elementName);
		if (event.target.value == "none") {
			sandwichContainer.forEach(function(sandwichItem) {
				if (sandwichItem.checked) {
					if (sandwichItem.value !== "none") {
						checkedItems.value.push(sandwichItem.value);
						sandwichItem.checked = false;
					}
				}				
			})
			console.log(checkedItems);
			event.target.checked = true;
			SandwichMaker.subtractFromTotal(checkedItems);
			return;
		};


		switch (event.target.name) {
			case "bread": 
				SandwichMaker.addTopping(SandwichMaker.addBread(event.target.value), sandwichContainer);
				break;
			case "meat": 
				SandwichMaker.addTopping(SandwichMaker.addMeat(event.target.value), sandwichContainer);
				break;
			case "cheese":
				SandwichMaker.addTopping(SandwichMaker.addCheese(event.target.value), sandwichContainer);
				break;
			case "veggies":
				SandwichMaker.addTopping(SandwichMaker.addVeggies(event.target.value), sandwichContainer);
				break;
			case "condiments":
				SandwichMaker.addTopping(SandwichMaker.addCondiments(event.target.value), sandwichContainer);
				break;
		}
	}
  }

})(SandwichMaker || {});













