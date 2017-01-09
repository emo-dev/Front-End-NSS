var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var scoresLength = scores.length;

var grades = {
	A: [],
	B: [],
	C: [],
	D: [],
	F: []
};

var random = [];

var output = [];
var div = document.createElement("div");
var element = document.getElementById("grade_count");


//Filled the grades object
for (var i = 0; i < scores.length; i++) {
	if (scores[i] >= 90) {
		grades.A.push(scores[i]);
	} else if (scores[i] >= 80) {
		grades.B.push(scores[i]);
	} else if (scores[i] >= 70) {
		grades.C.push(scores[i]);
	} else if (scores[i] >= 60) {
		grades.D.push(scores[i]);
	} else if (scores[i] >= 50) {
		grades.F.push(scores[i]);
	} else {
		random.push(scores[i]);
	}
}

function countingGrades() {
	console.log("Now trying to iterate through the grades object.")
	for (var property in grades) {
		console.log("property", property, "grades", grades[property][0]);
		if (grades[property].length >= 1) {
			console.log(grades[property].length);
			// var node = document.("The number of " + property + "'s is: " + grades[property].length);
			div.innerHTML = ("The number of " + property + "'s is: " + grades[property].length);
			div.className = "score";
			element.appendChild(div);
			console.log("done");
		}
	}
}

// function listingShiz() {
// 	for (var i = 0; i < fullNames.length; i++) {
// 		var newListItem = document.createElement("li");
// 		newListItem.innerHTML = fullNames[i];
// 		// var numberListValue = document.createTextNode(i);
// 		hohohoElement.appendChild(newListItem);
// 	}
// }

console.log(grades);
countingGrades();


// for (var property in grades) {
// 	output.push("Grade " + property + ": " + grades[property] + "; ");
// }

// for (var i = 0; i < output.length; i++) {
// 	para.appendChild(output[i]);
// 	element.appendChild(para);
// }
