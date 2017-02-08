"use strict";

let removeCards = require('./domHandling/removeCards.js');
let setTypes = require('./domHandling/setTypes.js');

function handleCards(category) {

	removeCards.removeCards().then(

			() => {return setTypes.setTypes(category);}

		);
}

module.exports = {handleCards};