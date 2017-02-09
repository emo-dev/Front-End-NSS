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

