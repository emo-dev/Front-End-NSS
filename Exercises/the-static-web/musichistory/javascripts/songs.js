/*
This file takes a bunch of songs and their descriptions,
adds them to an array, picks out the bad characters, 
then displays each string onto the index.html page
in the form of a list item.
*/




//Original song array
var songs = [];
//Array to keep "clean" songs
var newSongs = [];


//Retrieving the <ul> element to connect the 
//newSongs array to
var element = document.getElementById("songs");
//Create counter to help label <li> id names
var counter = 0;


//Original song list, notice bad characters
songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

//Putting new songs at the beginning and end of songs[]
songs.unshift("Bubble Dream > by Chon on the album Newborn Sun");
songs.push("Chaos > by MuteMath on the album MuteMath");



console.log("songs with artists and albums", songs);

// Letter Validation - <li> Append Function
function onlyLetters() {

	//Iterating through each string set in array songs
	for (var i = 0; i < songs.length; i++) {  

		//Create a new element for each loop
		var li = document.createElement("li");

		//Establishing ID name
		counter += 1;
		var keyName = 'song' + counter; 

		//Using regular expressions to both replace >
		//with -
		//and taking out remaining unwanted characters
		var x = songs[i].replace(/>/g, "-");
		var y = x.replace(/\*|!|@|\(|/g, ""); 
		console.log(y); 

		//Add the new song-string to our list
		newSongs += y;

		//Create new list item, and assign it to new song
		li.innerHTML = y;
		li.id = keyName;

		//Place element correctly in DOM
		element.appendChild(li);
	}
}

onlyLetters();

