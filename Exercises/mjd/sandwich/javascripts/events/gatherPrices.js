"use strict";


let gatherPrices = (event) => {
	let checkedItems = {};
	checkedItems.value = [];

	
	let elementName = event.target.name;
	checkedItems.name = elementName;
	let sandwichContainer = document.getElementsByName(elementName);
	if (event.target.value == "none") {
		sandwichContainer.forEach(function(sandwichItem) {
			if (sandwichItem.checked) {
				if (sandwichItem.value !== "none") {
					checkedItems.value.push(sandwichItem.value);
					sandwichItem.checked = false;
				}
			}				
		});
		console.log(checkedItems);
		event.target.checked = true;
		// SandwichMaker.subtractFromTotal(checkedItems);
		return;
	}


	// switch (event.target.name) {
	// 	case "bread": 
	// 		SandwichMaker.addTopping(SandwichMaker.addBread(event.target.value), sandwichContainer);
	// 		break;
	// 	case "meat": 
	// 		SandwichMaker.addTopping(SandwichMaker.addMeat(event.target.value), sandwichContainer);
	// 		break;
	// 	case "cheese":
	// 		SandwichMaker.addTopping(SandwichMaker.addCheese(event.target.value), sandwichContainer);
	// 		break;
	// 	case "veggies":
	// 		SandwichMaker.addTopping(SandwichMaker.addVeggies(event.target.value), sandwichContainer);
	// 		break;
	// 	case "condiments":
	// 		SandwichMaker.addTopping(SandwichMaker.addCondiments(event.target.value), sandwichContainer);
	// 		break;
	// }
};


module.exports = {gatherPrices};

