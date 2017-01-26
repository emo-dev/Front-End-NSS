var inputEl = document.getElementById("input1");
var button = document.getElementById("myButton");
console.log("Input Element: ", inputEl);

var testString = "";

function checkIfNumber(event) {
	console.log("receieved.")
	if (isNaN(inputEl.value) === false) {
		alert("Sorry, but please insert a valid character.");
		inputEl.value = '';
		return;
	}
}

function updateInput(event) {
	var userInput = inputEl.value.split(" "); 
	testString = userInput.join("").toLowerCase();
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
		initialAlphabitize.push(testString[letter]);
	}
	initialAlphabitize.sort();
	var alphabitize = initialAlphabitize.join("");
	document.getElementById("alphabetic").innerHTML = alphabitize;
}

//determines whether or not the string is a palindrome,
//if true, display the text "Your string is a palindrome"
//below the text
//Palindrome is a text that reads the same backwards as
//forwards
function palindrome() {
	var initialPalindrome = [];
	var backwardsPalindrome = [];
	for (var letter in testString) {
		initialPalindrome.push(testString[letter]);
		backwardsPalindrome.unshift(testString[letter]);
	}
	var ifPalindrome = initialPalindrome.join("");
	var elsePalindrome = backwardsPalindrome.join("");

	if (ifPalindrome === elsePalindrome) {
		var display = "Your string is a palindrome! Congratufuckinglations.";
		document.getElementById("palindrome").innerHTML = display;
	} else if (ifPalindrome === "camille") {
		document.getElementById("palindrome").innerHTML = "Sorry pretty lady, but you are too beautiful to be a fucking palindrome.";
	} else {
		document.getElementById("palindrome").innerHTML = "Hm.. At least you're really sexy.";
	}
}

function checkIfEnter() {
	if (event.keyCode == 13) {
		reversal();
		alphabits();
		palindrome();
	}
	return;
}

//When the user presses the enter key, or clicks the button
//testString should equal the value of the input
inputEl.addEventListener("keyup", checkIfNumber);
inputEl.addEventListener("change", updateInput);
inputEl.addEventListener("keyup", checkIfEnter);

button.addEventListener('click', reversal);
button.addEventListener('click', alphabits);
button.addEventListener('click', palindrome);
// reversal(testString);
// alphabits(testString);
// palindrome(testString);