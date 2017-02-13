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

$("input").click(function(event) {
	let target = $(event.target);
	let targetName = eval(target.attr("name"));
	console.log(targetName);
	switch(target.val()) {
		//if the target is the none checkbox
		case "none":
			subtract.subtractToppings(target.attr("name"));
			let nameList = document.getElementsByName(target.attr("name"));
			let runningTotal = 0;
			nameList.forEach(function(name) {
				runningTotal += targetName.maker(target.val());
			});
			totalPrice -= runningTotal;
			break;
		//if the target is a checkbox that doesn't equal "none"
		case target.val():
			let targetPrice = targetName.maker(target.val());
			//if it's being checked
			if (target.prop("checked")) {
				totalPrice += targetPrice;
			//if it is being un-checked
			} else if (target.is(":checked") === false) {
				totalPrice -= targetPrice;
			}

	}
});