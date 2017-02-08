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