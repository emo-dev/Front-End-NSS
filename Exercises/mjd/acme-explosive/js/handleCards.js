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

