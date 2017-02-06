"use strict";


var Acme = (function(LoadJson) {

	/*=========================*/
	/*========JSON LOAD========*/
	/*=========================*/	

	let myData =[];

	LoadJson.loadFireworks = function(fileName, variableName) {

		let updateFireworksData = fireworksList => {
			console.log("done loading " + variableName);
			myData[variableName] = fireworksList;
		};

		$.ajax({url:fileName})
			.done(updateFireworksData);

	};

	//Function to retrieve stored Json data
	LoadJson.grabJson = dataName => myData[dataName];


	return LoadJson;


})(Acme || {});

window.onload = Acme.loadFireworks("../jsonFiles/categories.json", )


























