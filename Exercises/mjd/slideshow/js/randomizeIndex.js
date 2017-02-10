"use strict";

var Slideshow = (function(Randomize) {

	Randomize.randomIndex = () => Math.floor(Math.random() * (Slideshow.grabPics().length + 1));

	return Randomize;

})(Slideshow || {});