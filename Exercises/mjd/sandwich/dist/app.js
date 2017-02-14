(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
"use strict";


let subtractToppings = (noneCheckbox) => {

	let nameType = noneCheckbox.name;

// 	.forEach(function(foodValue) {

// 		console.log(totalPrice);

//     	switch (noneCheckbox.name) {
// 			case "bread": 
// 				var breadPrice = SandwichMaker.subtractBread(foodValue);
// 				totalPrice -= breadPrice;
// 				console.log(totalPrice);
// 				break;
// 			case "meat": 
// 				var meatPrice = SandwichMaker.subtractMeat(foodValue);
// 				totalPrice -= meatPrice;
// 				console.log(totalPrice);
// 				break;
// 			case "cheese":
// 				var cheesePrice = SandwichMaker.subtractCheese(foodValue);
// 				totalPrice -= cheesePrice;
// 				console.log(totalPrice);
// 				break;
// 			case "veggies":
// 				var veggiePrice = SandwichMaker.subtractVeggies(foodValue);
// 				totalPrice -= veggiePrice;
// 				console.log(totalPrice);
// 				break;
// 			case "condiments":
// 				var condimentPrice = SandwichMaker.subtractCondiments(foodValue);
// 				totalPrice -= condimentPrice;
// 				console.log(totalPrice);
// 				break;
// 		}
// 	});

// 	var finalPriceDOM = document.getElementById("finalCost");
// 	finalPriceDOM.innerHTML = "$" + totalPrice;
// };
};


module.exports = {subtractToppings};






},{}],3:[function(require,module,exports){
"use strict";

let bread = require('./sandwich/Bread.js');
let cheese = require('./sandwich/Cheese.js');
let condiments = require('./sandwich/Condiments.js');
let meat = require('./sandwich/Meat.js');
let veggies = require('./sandwich/Veggies.js');

// let add = require('./events/addToppings.js');
let subtract = require('./events/subtractToppings.js');
let gather = require('./events/gatherPrices.js');

console.log(subtract, gather);

let totalPrice = 0;

$('input').click(function(event){
	console.log(event.target.checked);
});

$("input").click(function(event) {
	let target = $(event.target);
	let targetName = eval(target.attr("name"));
	let targetStringName = target.attr('name');
	switch(target.val()) {
		//if the target is the none checkbox
		case "none":
			let nameList = document.getElementsByName(targetStringName);
			nameList.forEach(function(name) {
				if (name.checked && (name.value != "none")) {
					name.checked = false;
					totalPrice -= targetName.maker(name.value);
					console.log(totalPrice);
				}
			});
			break;
		//if the target is a checkbox that doesn't equal "none"
		case target.val():
			document.getElementsByClassName(targetStringName)[0].children[5].checked = false;
			let targetPrice = targetName.maker(target.val());
			//if it's being checked
			if (target.prop("checked")) {
				totalPrice += targetPrice;
				console.log(totalPrice);
			//if it is being un-checked
			} else if (target.checked !== true) {
				totalPrice -= targetPrice;
				console.log(totalPrice);
			}

	}
});
},{"./events/gatherPrices.js":1,"./events/subtractToppings.js":2,"./sandwich/Bread.js":4,"./sandwich/Cheese.js":5,"./sandwich/Condiments.js":6,"./sandwich/Meat.js":7,"./sandwich/Veggies.js":8}],4:[function(require,module,exports){
"use strict";

// Private variable to store the different bread prices
let breadPrices = {
	artisan: 2,
	flatbread: 3,
	wholeGrain: 4,
	glutenFree: 4.50,
	ciabatta: 5.00
};

// Augment the original object with another method


let maker = (breadValue) => breadPrices[breadValue];

module.exports = {maker};
},{}],5:[function(require,module,exports){
"use strict";

// Private variable to store the different cheese prices
let cheesePrices = {
	mozzarella: 0.50,
	cheddar: 0.50,
	parmesan: 0.60,
	jack: 0.75,
	swiss: 1.00
};

// Augment the original object with another method

let maker = (cheeseValue) => cheesePrices[cheeseValue];


module.exports = {maker};

},{}],6:[function(require,module,exports){
"use strict";

// Private variable to store the different condiment prices
let condimentPrices = {
	ketchup: 0.10,
	chiliSauce: 0.50,
	mustard: 0.30,
	mayonnaise: 0.25,
	tabascoSauce: 0.75
};

// Augment the original object with another method


let maker = (condimentValue) => condimentPrices[condimentValue];


module.exports = {maker};


},{}],7:[function(require,module,exports){
"use strict";

// Private variable to store the different meat prices
let meatPrices = {
	spicyChicken: 3,
	roastBeef: 4,
	blackForestHam: 4,
	pastrami: 5,
	turkey: 4.50
};

// Augment the original object with another method
let maker = (meatValue) => meatPrices[meatValue];

module.exports = {maker};

},{}],8:[function(require,module,exports){
"use strict";

// Private variable to store the different meat prices
let veggiePrices = {
	lettuce: 0.50,
	tomato: 1,
	pickles: 0.75,
	peppers: 0.75,
	onions: 0.50
};

// Augment the original object with another method

let maker = (veggieValue) => veggiePrices[veggieValue];


module.exports = {maker};
},{}]},{},[3]);
