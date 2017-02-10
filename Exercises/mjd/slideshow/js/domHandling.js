"use strict";

var Slideshow = (function(DomHandling) {
	DomHandling.connected = () => console.log("I am connected!");

	let flag = true;


	DomHandling.displayPics = () => {
		return new Promise ((resolve, reject) => {

			if (flag) {
				let myPics = Slideshow.grabPics();
				let myRandomIndex = Slideshow.randomIndex();

				function alternateIMG(first, second) {
					$(first).fadeToggle("slow", function() {
						$(second).fadeToggle('slow', function() {
							$(first).attr("src", function() {
								return myPics[myRandomIndex].photoURL;
							});
							
						});
					});
				}


				let pic1 = $('#mars-pic1');
				let pic2 = $('#mars-pic2');

				switch (flag) {
					case true:
						alternateIMG(pic1, pic2);
						break;
					case false: 
						alternateIMG(pic2, pic1);
						break;
				}
				resolve();
			};
		})
	};

	DomHandling.resetFlag = () => flag != flag;

	return DomHandling;

})(Slideshow || {});