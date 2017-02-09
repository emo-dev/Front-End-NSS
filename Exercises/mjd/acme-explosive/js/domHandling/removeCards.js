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

