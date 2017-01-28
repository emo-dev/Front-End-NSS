var wrapper = document.getElementsByClassName("container")[0];
var arrow = document.getElementsByClassName("centered-div")[0];

function betweenTen() {
	var number = Math.floor((Math.random() * 10) + 1);
	return number;
};

window.addEventListener("click", function() {
	var counter = betweenTen();
	if (counter % 2 === 0) {
		arrow.style.backgroundImage = "url('images/Left-arrow.png')";
	} else {
		arrow.style.backgroundImage = "url('images/Right-arrow.png')";
	}
});