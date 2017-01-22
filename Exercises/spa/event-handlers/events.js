//========VARIABLES
var header = document.getElementById("page-header");
var myOutput = document.getElementById("output-target");
var mainArticle = document.getElementById("main-article");
var sections = mainArticle.childNodes;
var inputSection = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");



//========FUNCTIONS





//========EVENT LISTENERS

//this function adds an event listener to each section
//within the article on the page
//It also passes any #text element
console.log(sections.length);
for (var section in sections) {
	if (sections[section].className === "article-section") {
		var currentSection = sections[section];
		currentSection.addEventListener("click", function(event) {
			myOutput.innerHTML = ("You clicked on the " + event.target.innerHTML + " section");
		});
	}
};

//Header Listeners
header.addEventListener("mouseover", function(event) {
	myOutput.innerHTML = "You moved your mouse over the header";
	return;
});
header.addEventListener("mouseleave", function(event) {
	myOutput.innerHTML = "You left me!!";
	return;
});

//Input Listener
inputSection.addEventListener("change", function(event) {
	myOutput.innerHTML = 'Output Target';
})

inputSection.addEventListener("keyup", function(event) {
	var counter = 0;
	if (counter === 0) {
		myOutput.innerHTML = '';
		counter ++;
	}
	myOutput.innerHTML += event.target.value;
});

//Button Listeners
var colorCounter = 0;
document.getElementById("add-color").addEventListener("click", function(event) {
	if (colorCounter % 2 === 0) {
		guineaPig.className += " blue";
		colorCounter++
	} else {
		guineaPig.classList.remove("blue");
		colorCounter--;
	}

});
var bigCounter = 0;
document.getElementById("make-large").addEventListener("click", function(event) {
	if (bigCounter % 2 === 0) {
		guineaPig.className += " hulkify";
		bigCounter++;
	} else {
		guineaPig.classList.remove("hulkify");
		bigCounter--;
	};
});
var borderCounter = 0;
document.getElementById("add-border").addEventListener("click", function(event) {
	if (borderCounter % 2 === 0) {
		guineaPig.className += " capture";
		borderCounter++;
	} else {
		guineaPig.classList.remove("capture");
		borderCounter--;
	};
});
var roundingCounter = 0;
document.getElementById("add-rounding").addEventListener("click", function(event) {
	if (roundingCounter % 2 === 0) {
		guineaPig.className += " rounded";
		roundingCounter++;
	} else {
		guineaPig.classList.remove("rounded");
		roundingCounter--;
	};
});






























