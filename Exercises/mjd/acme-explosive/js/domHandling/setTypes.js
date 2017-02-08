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
