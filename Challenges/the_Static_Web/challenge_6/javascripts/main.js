var tenNaturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var sumOfSquares = 0;
var squareOfSums = 0;

function challenge6(numbersArray) {
	for (var i in numbersArray) {
		sumOfSquares += Math.pow(numbersArray[i], 2);
		squareOfSums += numbersArray[i];
		}

	var differenceBetween = sumOfSquares - Math.pow(squareOfSums, 2);
	console.log(differenceBetween);
	return differenceBetween;

}
challenge6(tenNaturalNumbers);