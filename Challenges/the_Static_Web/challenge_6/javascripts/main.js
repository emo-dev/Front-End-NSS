var tenNaturalNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function challenge6(numbersArray) {
	var sumOfSquares = 0;
	var squareOfSums = 0;
	for (var i in numbersArray) {
		sumOfSquares += Math.pow(numbersArray[i], 2);
		squareOfSums += numbersArray[i];
		}

	var differenceBetween = sumOfSquares - Math.pow(squareOfSums, 2);
	console.log("For nums 1-10.. The difference between sumOfSquares and squareOfSums: ", differenceBetween);
	return differenceBetween;

}
challenge6(tenNaturalNumbers);