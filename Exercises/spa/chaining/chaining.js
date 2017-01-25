// Using one single line of JavaScript code, 
//complete the following tasks on the array of integers below.

// Sort the numbers in descending order (
//10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and 
//then subtract 1.
// Then output (either in the DOM or the console) 
//the sum of all the resulting numbers.




var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
var newArray = []
console.log(integers.length);
for (var number = 0; number < integers.length; number++) {
	if (integers[number] < 19) {
		newArray[newArray.length] = (integers[number] * 1.5) - 1;
	};
};
newArray = newArray.sort(function(a, b) {return b-a});
var finalNum = 0;
for (var num in newArray) {
	finalNum += newArray[num];
}


var para = document.getElementById("result");

para.innerHTML = ("Your sum is " + finalNum)
console.log(newArray);
