// Create an array that contains the letters of the alphabet
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var stacked = '';
var stackedWithSpace = '';
var counter = 0;

function stackLetters (theAlphabetArray) {
	
	for (var letter in theAlphabetArray) {
    	stacked += theAlphabetArray[letter];
    	console.log(stacked);
    }

    for (var letter in theAlphabetArray) {
    	counter += 1;
    	if (counter % 3 === 0) {
    		stackedWithSpace += theAlphabetArray[letter];
    		stackedWithSpace += ' ';
    		console.log(stackedWithSpace);
    	} else {
    		stackedWithSpace += theAlphabetArray[letter];
    		console.log(stackedWithSpace);
    	}
    }  
}

// // Invoke the function and pass in the array
// stackLetters(alphabet)
stackLetters(alphabet);