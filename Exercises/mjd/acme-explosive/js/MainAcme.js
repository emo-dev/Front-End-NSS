"use strict";


let getCategories = (variableName) => {

	let myData = {};

	let updateFireworksCategories = fireworksList => {
		console.log("done loading " + variableName);
		myData[variableName] = fireworksList;
	};

	$.ajax({url:"../jsonFiles/products.json"})
		.done(updateFireworksCategories);

	return myData;
};

window.onload = getCategories("categories");




















