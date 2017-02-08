"use strict";


window.fileUploads = require('./initialUploads.js');
let fileUploads = require('./initialUploads.js');

window.fireworks = require('./HoldData.js');
let fireworks = require('./HoldData.js');

window.categories = require('./domHandling/setCategories.js');

let categoryChosen = require('./handleCards.js');


/*

File Uploads cycles through all Categories/Types/and Products
Json files and uploads the content into an object called 
myData{} located in HoldData.js
*/

fileUploads.fireworks();


/*

Add event listener to the categories button located in the navbar
When clicked, it triggers a promise.
The promise will check for children within each specific Category column
and remove them if true. 
Depending on the category clicked, it will fill the corresponding column
with 3 types of product cards, and each product to go with each type
*/

document.getElementsByClassName("nav-dropdown")[0].addEventListener("click", function() {
	let myCategory = event.target.innerText;
	categoryChosen.handleCards(myCategory);
});














































