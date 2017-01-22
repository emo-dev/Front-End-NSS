//========VARIABLES
var header = document.getElementById("page-header");
var myOutput = document.getElementById("output-target");



//========FUNCTIONS





//========EVENT LISTENERS
header.addEventListener("mouseover", function() {
	myOutput.value = "You moved your mouse over the header";
	return;
});
header.addEventListener("mouseleft", function {
	myOutput.value = "You left me!!";
	return;
});
