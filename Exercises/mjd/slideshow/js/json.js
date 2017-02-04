"use strict";

var Slideshow = (function(JsonLoad) {
	JsonLoad.jsonConnect = () => console.log("I am connected!");

	//Variable to store all Parsed Json Data Files
	let myData = {};
	
	//Creates ajax request for cat pics. Pushes the retrieved JSON
	//file to the updateCatData function to be stored
	//For the pre-determined cat list
	JsonLoad.loadCats = function() {

		let updateCatData = songList => {
			console.log("done loading cats");
			myData.cats = songList;
		};

		$.ajax({url:"http://thecatapi.com/api/images/get?format=xml&results_per_page=20"})
			.done(updateCatData);
	};

	//Function to retrieve stored Json data
	JsonLoad.grabJson = dataName => myData[dataName];

	JsonLoad

	return JsonLoad;

})(Slideshow || {});

window.onload = Slideshow.loadCats