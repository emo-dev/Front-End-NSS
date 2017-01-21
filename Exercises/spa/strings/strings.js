var inputEl = document.getElementById("input1");
var button = document.getElementById("myButton");
console.log("Input Element: ", inputEl);

var testString = "";

function checkIfNumber(event) {
	console.log("receieved.")
	if (isNaN(inputEl.value) === false) {
		alert("Sorry, but please insert a valid character.");
		document.getElementById("form1").reset();
		return;
	}
}

function updateInput(event) {
	var userInput = inputEl.value.split(" "); 
	testString = userInput.join("");
	return;
}

//reverses the order of the characters in the string, 
//and outputs the result in the DOM below the text input
function reversal() {
	var initialReverse = [];
	for (var letter in testString) {
		initialReverse.unshift(testString[letter]);
	}
	var reverse = initialReverse.join("");
	document.getElementById("reversal").innerHTML = reverse;
}

//returns the characters in alphabetical order, and outputs
//the result in the DOM below the text input
function alphabits() {
	var initialAlphabitize = [];
	for (var letter in testString) {
		initialReverse.sort(testString[letter]);
	}
	var alphabitize = initialAlphabitize.join("");
	document.getElementById("alphabetic").innerHTML = alphabitize;
}

//determines whether or not the string is a palindrome,
//if true, display the text "Your string is a palindrome"
//below the text
//Palindrome is a text that reads the same backwards as
//forwards
function palindrome() {


	var isPalindrome = document.getElementById("palindrome").innerHTML;
}

//When the user presses the enter key, or clicks the button
//testString should equal the value of the input
inputEl.addEventListener("keyup", checkIfNumber);
inputEl.addEventListener("change", updateInput);

button.addEventListener('click', reversal);
// button.addEventListener('click', alphabits);
// button.addEventListener('click', palindrome);
// reversal(testString);
// alphabits(testString);
// palindrome(testString);