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

function removeCards() {

	return new Promise((resolve) => {

		let deleteCards = function() {
			console.log("you are within the removeCards.js");
			$(".fireworks-card").remove();
			resolve();
		};

		window.setTimeout(function() {
			deleteCards();
		}, Math.random() * 2000);
	});	
}

module.exports = {removeCards};
},{}],3:[function(require,module,exports){
"use strict";


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

				console.log(header);
				$(".row").append(card);
			});
		};

		window.setTimeout(function() {
			createCategoryCards(data);
		}, Math.random() * 2000);

		resolve();
	});
};


module.exports = {setCategories};
},{}],4:[function(require,module,exports){
"use strict";

let myData = require('.././HoldData.js');


//category represents the category that the user clicks in the dropdown 
//within the navbar
function setTypes(category) {

	return new Promise((resolve) => {

		let createTypeCards = function() {
			console.log("You are within setTypes.js");

			let categories = myData.getData().categories;
			let types = myData.getData().types;
			let myCategoryId;
			let myTypeIds = [];

			let myTypes = [];

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

			console.log("myCategoryId: ", myCategoryId, "| myTypeIds: ", myTypeIds, "| myTypes: ", myTypes);

			myTypes.forEach(function(type) {
				let myCard = ``;
				myCard += `
					<div class="col-md-12 ${type.name + type.id} fireworks-card">
					    <div class="thumbnail">
					      <div class="caption">
					        <h3>${type.description + " " + type.id}</h3>
					        <p>...</p>
					      </div>
					    </div>
					  </div>`;

			$('.' + category).append(myCard);
			});


			resolve();
		};

		window.setTimeout(function() {
			createTypeCards(category);
		}, Math.random() * 2000);

	});
}

module.exports = {setTypes};

},{".././HoldData.js":1}],5:[function(require,module,exports){
"use strict";

let removeCards = require('./domHandling/removeCards.js');
let setTypes = require('./domHandling/setTypes.js');

function handleCards(category) {

	removeCards.removeCards().then(

			() => {return setTypes.setTypes(category);}

		);
}

module.exports = {handleCards};
},{"./domHandling/removeCards.js":2,"./domHandling/setTypes.js":4}],6:[function(require,module,exports){
"use strict";

let categories = require('./jsonUploads/CategoriesAcme.js');
let types = require('./jsonUploads/TypesAcme.js');
let products = require('./jsonUploads/ProductsAcme.js');

let myData = require('./HoldData.js');
let categoryCards = require('./domHandling/setCategories.js');

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
},{"./HoldData.js":1,"./domHandling/setCategories.js":3,"./jsonUploads/CategoriesAcme.js":7,"./jsonUploads/ProductsAcme.js":8,"./jsonUploads/TypesAcme.js":9}],7:[function(require,module,exports){
"use strict";

let data = require('../HoldData.js');

let getCategories = () => {

	return new Promise((resolve, reject) => {
		let categories = new XMLHttpRequest();

		categories.addEventListener("load", function () {
			console.log("Loading categories");
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
		}, Math.random() * 2000);
	});
};

module.exports = {getCategories};
	






















},{"../HoldData.js":1}],8:[function(require,module,exports){
"use strict";

let data = require('../HoldData.js');

let getProducts = () => {

	return new Promise((resolve, reject) => {
		let products = new XMLHttpRequest();

		products.addEventListener("load", function () {
			console.log("Loading products");
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
		}, Math.random() * 2000);
	});
};


module.exports = {getProducts};




















},{"../HoldData.js":1}],9:[function(require,module,exports){
"use strict";

let data = require('../HoldData.js');

let getTypes = () => {

	return new Promise((resolve, reject) => {
		let types = new XMLHttpRequest();

		types.addEventListener("load", function () {
			console.log("Loading types");
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
		}, Math.random() * 2000);
	});
};

module.exports = {getTypes};









},{"../HoldData.js":1}],10:[function(require,module,exports){
"use strict";


window.fileUploads = require('./initialUploads.js');
let fileUploads = require('./initialUploads.js');

window.fireworks = require('./HoldData.js');
let fireworks = require('./HoldData.js');

window.categories = require('./domHandling/setCategories.js');

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
The promise will check for children within each specific Category column
and remove them if true. 
Depending on the category clicked, it will fill the corresponding column
with 3 types of product cards, and each product to go with each type
*/

document.getElementsByClassName("nav-dropdown")[0].addEventListener("click", function() {
	let myCategory = event.target.innerText;
	categoryChosen.handleCards(myCategory);
});















































},{"./HoldData.js":1,"./domHandling/setCategories.js":3,"./handleCards.js":5,"./initialUploads.js":6}]},{},[10]);
