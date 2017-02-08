"use strict";

let myData = require('.././HoldData.js');

let setProducts = (resolveObj) => {

	return new Promise((resolve) => {

		let createProductCards = (products) => {

			console.log(resolveObj);

			resolveObj.myTypeIds.forEach(function(id) {
				console.log(id);
				products.forEach(function(product) {
					product.forEach(function() {
						
					})
					console.log(product);
				});
			});

			let productDom = 
			`<div class="row marketing">
		        <div class="col-lg-6">
		          <h4>Subheading</h4>
		          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

		          <h4>Subheading</h4>
		          <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

		          <h4>Subheading</h4>
		          <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
		        </div>
		    </div>`;

		};

		resolve();

		window.setTimeout(function() {
			createProductCards(myData.getData().products);
		}, Math.random() * 2000);
	});

};







module.exports = {setProducts};