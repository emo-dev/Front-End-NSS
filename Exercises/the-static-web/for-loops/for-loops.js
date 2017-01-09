for (var i=5; i<=125; i+=5) {
	console.log("Current value is " + i);
}

for (var j = 4096; j > 1; j = j / 2) {
    console.log(j);
}

var presidents = ["George Washington", "Thomas Jefferson", "John Adams", "Abe Lincoln"];

for (var i=0; i < presidents.length; i++) {
	console.log("President #1 was " + presidents[i]);
}

var antSpecies = {
  argentine: {},
  army: {},
  bigHeaded: {},
  black: {},
  bull: {},
  carpenter: {},
  crazy: {},
  fire: {},
  glider: {},
  honeyPot: {},
  jackJumper: {}
}

for (var i in antSpecies) {
	console.log(i)
}