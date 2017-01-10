var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var max = Math.max(...scores);
console.log("Highest score: ", max);
var min = Math.min(...scores);
console.log("Lowest score: ", min);

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
		if (grades[property].length >= 1) {
			console.log("Key length in grades obj " + property + ":", grades[property].length);
			// var node = document.("The number of " + property + "'s is: " + grades[property].length);			div.className = "score";
			div.className = "score"; 
			element.appendChild(div);		}

		div.innerHTML += ("The number of " + property + "'s is: " + grades[property].length + "<br>");
	}
}

countingGrades();
