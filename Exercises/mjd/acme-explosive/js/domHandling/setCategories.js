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

