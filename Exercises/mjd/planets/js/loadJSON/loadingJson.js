"use strict";

let planetData;

let loadData = () => {
	return new Promise((resolve, reject) => {
		$.ajax({url: "../../planets.json"})
				.done((songData) => {
					console.log(songData);
					planetData = songData;
					resolve(songData);})
				.fail((error) => reject(error));
		
	});
};

let getData = () => planetData;

module.exports = {loadData, getData};


