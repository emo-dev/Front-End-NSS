var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];


// The number of loops to perform (what if the array changes?)
var loopCount = 5;


// Keep track of which band we're on in the loop
var currentBand = [];
// Keep track of which veggie we're on in the loop
var currentVeggie = [];


// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");


// Start looping
function listPlacement(something) {
	if (something === "bands") {
		for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
			var newListItem = document.createElement("li");
		  // Add the band names into the correct <div>
		  	currentBand = bands[loopTracker];
		  	newListItem.innerHTML = currentBand;
		  	bandElement.appendChild(newListItem);
		}
	} else if (something === "veggies") {
		for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
			var newListItem = document.createElement("li");
		  // Add the band names into the correct <div>
		  	currentVeggie = vegetables[loopTracker];
		  	newListItem.innerHTML = currentVeggie;
		  	bandElement.appendChild(newListItem);
		}
	} else {
		alert("Please.. Only veggies or bands. Please.");
	}
};


listPlacement(prompt("Whatcha want?", "bands or veggies") );

  // // Add the veggie names into the correct <div>
  // 	currentVeggie = vegetables[loopTracker];
  // 	newListItem.innerHTML = currentBand[loopTracker];
  // 	bandElement.appendChild(newListItem);



// function listingShiz() {
// 	for (var i = 0; i < fullNames.length; i++) {
// 		var newNumberListItem = document.createElement("li");
// 		newNumberListItem.innerHTML = fullNames[i];
// 		hohohoElement.appendChild(newNumberListItem);
// 	}
// }