(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
	

let myData = {};

let setData = (variableName, data) => {
		myData[variableName] = data;
};

let getData = () => {return myData;};

module.exports = {setData, getData};



},{}],2:[function(require,module,exports){
"use strict";


/*

This function removes all product information
within the categories set up on the DOM
*/


function removeCards() {

	return new Promise((resolve) => {

		let deleteCards = function() {
			$(".fireworks-card").remove();

			console.log("Removed any product information from page at removeCards.js.");
			console.log("This is the beginning of the promise chain at handleCards.js");

			resolve();
		};

		window.setTimeout(function() {
			deleteCards();
		}, 1000);
	});	
}


module.exports = {removeCards};


},{}],3:[function(require,module,exports){
"use strict";


/*

This function takes parsed json data 
and creates basic HTML structures for each 
category within the DOM.

This function must be the end of the promise
chain initialized at initialUploads.js
*/


let setCategories = (data) => {

	return new Promise((resolve) => {

		let categories = data.categories;

		let createCategoryCards = (data) => {
			categories.forEach(function(category) {
				// let categoryName = category.name;
				// let categoryID = category.id;
				let header = category.name + " ID" + category.id; 

				let card = ``;
				card += 
					`<div class="col-md-4">
						<div class="thumbnail ${category.name}">
		          			<h2 class="song-header">${header}</h2>
		          		</div>
		        	</div>`;

				$(".row").append(card);

			});
		};

		window.setTimeout(function() {
			createCategoryCards(data);
		}, 1000);

		console.log("Set initial HTML Categories at setCategories.js.");
		console.log("This is the end of the promise chain at initialUploads.js");
		console.log("");
		console.log("==============================================");
		console.log("==============================================");
		console.log("");
		resolve();
	});
};


module.exports = {setCategories};


},{}],4:[function(require,module,exports){
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


},{".././HoldData.js":1}],5:[function(require,module,exports){
"use strict";


/*

Requires for this file.
*/

let myData = require('.././HoldData.js');


/*

This function appends "type information" to the DOM 
based on the category selected. 
It also applies a different background color to each thumbnail 
based on the category.
*/


function setTypes(category) {

	return new Promise((resolve) => {

		//Object to be passed to setProducts.js in the 
		//next step of the promise. 
		let resolveObject = {};

		let myCategoryId;
		let myTypeIds = [];
		let myTypes = [];

		let createTypeCards = function() {

			let categories = myData.getData().categories;
			let types = myData.getData().types;

			//loop through categories to find matching click point
			for (var obj = 0; obj < categories.length; obj++) {
				if (category === categories[obj].name) {
					myCategoryId = categories[obj].id;

					//once found, loop through types to find matching type of 
					//the click point. push the type into myTypes, 
					//and also push type.id into myTypeId
					for (obj = 0; obj < types.length; obj++) {
						if (myCategoryId === types[obj].category) {
							myTypeIds.push(types[obj].id);
							myTypes.push(types[obj]);
						}
					}
				}
			}


			//Set background color of thumbnail based on category
			let thumbnailBackgroundColor;

			switch (myCategoryId) {
				case 0:
					thumbnailBackgroundColor = "pink";
					break;
				case 1: 
					thumbnailBackgroundColor = "lightgreen";
					break;
				case 2:
					thumbnailBackgroundColor = "yellow";
					break;
			}


			//set up structure for each Type and append it to the DOM container
			myTypes.forEach(function(type) {
				let myCard = ``;
				myCard += `
					<div class="col-md-12 ${type.name + type.id} fireworks-card">
					    <div class="thumbnail" style="background-color:${thumbnailBackgroundColor}">
					      <div class="caption">
					      	<h5>${type.name.toUpperCase()}</h5>
					        <h5>${type.description + " " + type.id}</h5>
					        <hr>
					        <p>...</p>
					        <div class="col-lg-12">
					          <section id="products--${type.id}" class="product-descriptions"></section>
					        </div>
					      </div>
					    </div>
					  </div>`;

			$('.' + category).append(myCard);
			});

			resolveObject = {
				myTypeIds, myTypes
			};

			console.log("Set Type structure at setTypes.js");
			resolve(resolveObject);
		};


		window.setTimeout(function() {
			createTypeCards(category);
		}, 1000);

	});
}

module.exports = {setTypes};


},{".././HoldData.js":1}],6:[function(require,module,exports){
"use strict";


/*

Requires for the file.
*/


let removeCards = require('./domHandling/removeCards.js');
let setTypes = require('./domHandling/setTypes.js');
let setProducts = require('./domHandling/setProducts.js');


/*

This is the beginning of a promise chain.
The chain's steps: 

	1. Remove any (if any) product information from 
		the website.
	2. Create product cards per type within the specified category.
		These cards include basic <h3> tags and structure
	3. Create product descriptions per product per type

*/


function handleCards(category) {

	removeCards.removeCards().then(
			() => {return setTypes.setTypes(category);}
		).then(
			(resolveObj) => {return setProducts.setProducts(resolveObj);}
		);
}

module.exports = {handleCards};


},{"./domHandling/removeCards.js":2,"./domHandling/setProducts.js":4,"./domHandling/setTypes.js":5}],7:[function(require,module,exports){
"use strict";


/*

Requires for the page
*/

let categories = require('./jsonUploads/CategoriesAcme.js');
let types = require('./jsonUploads/TypesAcme.js');
let products = require('./jsonUploads/ProductsAcme.js');

let myData = require('./HoldData.js');
let categoryCards = require('./domHandling/setCategories.js');


/*

This function sets up a promise chain to: 
	
	1. Retrieve and parse categories.json file
	2. Retrieve and parse types.json file
	3. Retrieve and parse products.json file
	4. Set up initial DOM structure by using category information

The data retrieved from the json files is stored as objects
within HoldData.js
*/

function fireworks() {

	return new Promise((resolve) => {

		categories.getCategories().then(
			() => {return types.getTypes();},
			(errorMessage) => console.error(errorMessage)
		).then(
			() => {return products.getProducts();},
			(errorMessage) => console.error(errorMessage)
		).then(
			() => {return categoryCards.setCategories(myData.getData());}
		);

	});
}

module.exports = {fireworks};


},{"./HoldData.js":1,"./domHandling/setCategories.js":3,"./jsonUploads/CategoriesAcme.js":8,"./jsonUploads/ProductsAcme.js":9,"./jsonUploads/TypesAcme.js":10}],8:[function(require,module,exports){
"use strict";


/*

Requires for the page
*/

let data = require('../HoldData.js');


/*

This function makes an XMLHttpRequest for 
categories.json
It takes the parsed Json and stores it within an object 
at HoldData.js
*/

let getCategories = () => {

	return new Promise((resolve, reject) => {
		let categories = new XMLHttpRequest();

		categories.addEventListener("load", function () {
			console.log("Loading categories at CategoriesAcme.js.");
			data.setData("categories", this.response);
			// myData[variableName] = this.response;
			resolve();
		});

		categories.addEventListener("error", function() {
			console.log("Error occured with categories");
			reject("Error within categories");
		});

		categories.open("GET", "../../jsonFiles/categories.json");
		categories.responseType ="json";

		window.setTimeout(function() {
			categories.send();
		}, 1000);
	});
};


module.exports = {getCategories};
	

},{"../HoldData.js":1}],9:[function(require,module,exports){
"use strict";


/*

Requires for the page
*/

let data = require('../HoldData.js');


/*

This function makes an XMLHttpRequest for 
products.json
It takes the parsed Json and stores it within an object 
at HoldData.js
*/

let getProducts = () => {

	return new Promise((resolve, reject) => {
		let products = new XMLHttpRequest();

		products.addEventListener("load", function () {
			console.log("Loading products at ProductsAcme.js");
			data.setData("products", this.response);
			// myData[products] = this.response;
			resolve(data.getData());
		});

		products.addEventListener("error", function() {
			console.log("Error occured with products");
			reject("Error within products");
		});

		products.open("GET", "../../jsonFiles/products.json");
		products.responseType ="json";

		window.setTimeout(function() {
			products.send();
		}, 1000);
	});
};


module.exports = {getProducts};


},{"../HoldData.js":1}],10:[function(require,module,exports){
"use strict";


/*

Requires for the file.
*/

let data = require('../HoldData.js');


/*

This function makes an XMLHttpRequest for 
types.json
It takes the parsed Json and stores it within an object 
at HoldData.js
*/

let getTypes = () => {

	return new Promise((resolve, reject) => {
		let types = new XMLHttpRequest();

		types.addEventListener("load", function () {
			console.log("Loading types at TypesAcme.js");
			data.setData("types", this.response);
			// myData[types] = this.response;
			resolve();
		});

		types.addEventListener("error", function() {
			console.log("Error occured with types");
			reject("Error within types");
		});

		types.open("GET", "../../jsonFiles/types.json");
		types.responseType ="json";

		window.setTimeout(function() {
			types.send();
		}, 1000);
	});
};


module.exports = {getTypes};


},{"../HoldData.js":1}],11:[function(require,module,exports){
"use strict";


/*

Requires for the file.
*/

let fileUploads = require('./initialUploads.js');
let fireworks = require('./HoldData.js');
let categoryChosen = require('./handleCards.js');


/*

File Uploads cycles through all Categories/Types/and Products
Json files and uploads the content into an object called 
myData{} located in HoldData.js
*/

fileUploads.fireworks();


/*

Add event listener to the categories button located in the navbar
When clicked, it triggers a promise. 
The promise can be adjusted at handleCards.js
The promise will check for children within each specific Category column
and remove them if true. 
Depending on the category clicked, it will fill the corresponding column
with 3 types of product cards, and each product to go with each type
*/

document.getElementsByClassName("nav-dropdown")[0].addEventListener("click", function() {
	let myCategory = event.target.innerText;
	categoryChosen.handleCards(myCategory);
});















































},{"./HoldData.js":1,"./handleCards.js":6,"./initialUploads.js":7}]},{},[11]);
