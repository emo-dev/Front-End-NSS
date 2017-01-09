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
	var celsius =((x * 9) / 5) + 32;
	console.log(celsius);
	element.innerHTML = celsius + " degrees Fahrenheit";
}

// Converting a Celsius temp to Fahrenheit
function toFahrenheit (y) {
	var fahrenheit = ((y - 32) * 5) / 9;
	console.log(fahrenheit);
	element.innerHTML = fahrenheit + " degrees Celsius";
}

function conversionReset() {
	element.innerHTML = "";
}

function checkDegrees() {

	console.log("starting checkDegrees function");

	temperature = document.getElementById('temperature').value;

	console.log(temperature);

	for (var i = 0; i < temperature.length; i++) {
		if (fahrenheit.checked === true) {
		toFahrenheit(temperature);
		} else if (celsius.checked === true) {
	 	toCelsius(temperature);
		}
	}
}









