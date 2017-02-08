"use strict";

let removeCards = require('./domHandling/removeCards.js');
let setTypes = require('./domHandling/setTypes.js');
let setProducts = require('./domHandling/setProducts.js');

function handleCards(category) {

	removeCards.removeCards().then(
			() => {return setTypes.setTypes(category);}
		).then(
			(resolveObj) => {return setProducts.setProducts(resolveObj);}
		);
}

module.exports = {handleCards};