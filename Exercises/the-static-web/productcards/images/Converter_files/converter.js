//---GLOBAL VARIABLES

var temperature = document.getElementById("temperature").value;
var button = document.getElementById("converter");
var element = document.getElementById("converted-temp");
var fahrenheit = document.getElementById("fahrenheit");
var celsius = document.getElementById("celsius");

console.log("So far so good.");

//---FUNCTIONS


// Converting a Fahrenheit temp to Celsius
function toCelsius (x) {
	var celsius =((x - 32) * 5) / 9;
	console.log(celsius);
	element.disabled = !element.disabled;
	element.innerHTML = temperature;
}

// Converting a Celsius temp to Fahrenheit
function toFahrenheit (y) {
	var fahrenheit = ((y * 9) / 5) + 32;
	console.log(fahrenheit);
	element.disabled = !element.disabled;
	element.innerHTML = temperature;
}

// function alertVal() {
// 		alert("you chose " + temperature);
// 	}

// Checking to see if the temp input is a valid 
// number, and then rounding to the nearest
// floating num. No decimals
function checkDegrees() {

	console.log("starting checkDegrees function");

	console.log(temperature);

	if (temperature.length > 0) {

		console.log("Input is recognized.")

		if (isNaN(temperature) === false) {
			console.log("input is recognized as a valid number.")
			temperature = Math.round(temperature);
			return temperature;
		} else {
			alert('Please enter a valid number.')
		}
	} else {
		alert('Please enter a temperature.')
	}
}

// This function should determine which conversion should
// happen based on which radio button is selected.
// function determineConverter (clickEvent) {
// 	console.log("event", clickEvent);

// 	checkDegrees();

// 	if (fahrenheit.checked === true) {
// 		toFahrenheit(temperature);
// 	} else if (celsius.checked === true) {
// 	 	toCelsius(temperature);
// 	}

// }



// // Assign a function to be executed when the button is clicked
// button.addEventListener("click", determineConverter(checkDegrees));











