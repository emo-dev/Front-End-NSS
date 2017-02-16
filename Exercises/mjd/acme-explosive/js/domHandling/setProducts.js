"use strict";


/*

Requires needed for the file.
*/

let myData = require('.././HoldData.js');


/*

This function takes product information
and displays it on the website based on 
the category and type of firework.
*/

let setProducts = (resolveObj) => {

	return new Promise((resolve) => {

		let createProductCards = (productsArr) => {
			let myProducts = [];

			for (let id = 0; id < resolveObj.myTypeIds.length; id++) {
				
				let productId = "products--" + resolveObj.myTypeIds[id].toString();
				let productCard = document.getElementById(productId);

				productsArr.forEach(function(productsObj) {
					for (var product in productsObj) {
						if (productsObj[product].type === resolveObj.myTypeIds[id]) {
							myProducts.push(productsObj[product]);
							let productDom = ``;
							productDom += 
								`<h5><strong><u>${productsObj[product].name}<u><strong></h5>
		        				<p>${productsObj[product].description}</p>
		        				<br><br>`;
		        			$(productDom).appendTo(productCard);
						}
					}
				});
			}
		};

		console.log("Set Product structures as setProducts.js");
		console.log("This is the end of the promise chain initialized at handleCards.js");
		console.log();
		console.log("==============================================");
		console.log("==============================================");
		console.log();
		resolve();

		window.setTimeout(function() {
			createProductCards(myData.getData().products);
		}, 1000);
	});

};


module.exports = {setProducts};

