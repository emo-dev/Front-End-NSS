

console.log("connectedddddddd");

var startTime = Date.now();
console.log("Date begins: ", startTime);

//This function is used to iterate through the Pet Food JSON files, both for the
//dogfood and the catfood. 
function organizePetFoodData(petFood) {
	var dogFoodTable = document.getElementById("dog-food");
	
	//Empty Object to contain all the important stuff.
	var theImportantStuff = {};

	var initialObject = Object.keys(petFood);
	//Contains two Objects
	var petBrands = petFood[initialObject[0]];
	//"Specific Names"
	theImportantStuff.petBrandNames = [];
	//"Specific Volumes"
	theImportantStuff.petBrandTypes = [];
	//"Specific Size"
	theImportantStuff.petBrandSizes = [];
	//"Specific Price"
	theImportantStuff.petBrandPrices = [];
	//"Type, Volume, and Price"
	theImportantStuff.threeInOne = [];

	//petBrands has 2 Objects
	petBrands.forEach(function(brand) {
		//this gives me the specific names
		theImportantStuff.petBrandNames.push(brand["name"]);
		//Array of 2 Objects
		var theBrandTypes = brand["types"]; 
		//For each type
		theBrandTypes.forEach(function(types) { 

			theImportantStuff.petBrandTypes.push(types["type"]);
			//Grabbing volumes 
			var theBrandVolumes = types["volumes"];

			theBrandVolumes.forEach(function(volume) {

				//creating a new array to represent the type/size/and price
				//to be added to DOM
				var petFoodVolumePriceAndName = types["type"] + ', ' + volume["name"] + ', ' + volume["price"];
				// petFoodVolumePriceAndName.push(types["type"], volume["name"], volume["price"]);

				//Grabbing the sizes and prices
				theImportantStuff.petBrandSizes.push(volume["name"]);
				theImportantStuff.petBrandPrices.push(volume["price"]);
				
				theImportantStuff.threeInOne.push(petFoodVolumePriceAndName);
			})
		})
		
	});

	console.log(theImportantStuff);
	return theImportantStuff;
};

function addToDOM(petFood) {
	var petFoodTable = document.getElementsByClassName("pet-food")[0];

	console.log(petFood["petBrandNames"]);
	petFoodTable.innerHTML += `<tr>
									<td>${petFood['petBrandNames'].join(", ")}</td>
									<td>${petFood['threeInOne'].join(" / ")}</td>
								</tr>`
};

function dataRequestFailed(event) {
	console.log("Womp womp, none data.")
};

//Starting an XHR Request for Dog Food to populate the table ion index.html
var dogFoodDataRequest = new XMLHttpRequest();
dogFoodDataRequest.addEventListener("load", petFoodDataRequestComplete);
dogFoodDataRequest.addEventListener("error", dataRequestFailed);

//XHR Request for cat food
var catFoodDataRequest = new XMLHttpRequest();
catFoodDataRequest.addEventListener("load", petFoodDataRequestComplete);
catFoodDataRequest.addEventListener("error", dataRequestFailed);

function petFoodDataRequestComplete(event) {petFoodDataRequestComplete
	console.log("The dog food data transfer is complete.");
	var petFoodData = JSON.parse(event.target.responseText);
	console.log("Pet Food Data: ", petFoodData);
	console.log(organizePetFoodData(petFoodData).petBrandNames);
	addToDOM(organizePetFoodData(petFoodData));
};


dogFoodDataRequest.open("GET", "dog_food.json");
dogFoodDataRequest.send();

catFoodDataRequest.open("GET", "cat_food.json");
catFoodDataRequest.send();
















