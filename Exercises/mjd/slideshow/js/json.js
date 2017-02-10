"use strict";

var Slideshow = (function(JsonLoad) {
	//Variable to store all Parsed Json Data Files
	let myData = [];
	
	//Creates ajax request for cat pics. Pushes the retrieved JSON
	//file to the updateNasaData function to be stored
	//For the pre-determined cat list
	JsonLoad.loadNasa = function() {
		return new Promise ((resolve, reject) => {

			let updateNasaData = planetList => {

				myData = planetList.photos.map(function(photo) {
					let myPic = {};
					myPic.date = photo.earth_date;
					myPic.camera = photo.camera.name;
					myPic.photoURL = photo.img_src;
					return myPic;
				})
				console.log("done loading planets");
				console.log(myData);
				$('#mars-pic2').attr("src", myData[Slideshow.randomIndex()].photoURL);
				resolve();
			};

			$.ajax({
					url:"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=6ZZwVZ6tWx3Qt3lyKkiOvxpx0ylpZut9oOmg8LiT",
					dataType: "json", 
					success: function(data) {
						updateNasaData(data);
					},	
					error: () => reject("You suck at this.") 
			});
		}) 

	};
	//Function to retrieve stored Json data
	JsonLoad.grabPics = () => myData;

	return JsonLoad;

})(Slideshow || {});





