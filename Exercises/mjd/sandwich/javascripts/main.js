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