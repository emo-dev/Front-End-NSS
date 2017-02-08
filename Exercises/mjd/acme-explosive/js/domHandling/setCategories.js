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