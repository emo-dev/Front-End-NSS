"use strict";

app.controller("NewNotesCtrl", function($scope, $location, $window, $filter, HandleFBDataFactory, AuthFactory, UserStorageFactory) {
	let s = $scope;

	let user = AuthFactory.getUser();

	console.log("I am within NewNotesCtrl, and here is my user: ", user);

	s.title = "New Note";
	s.category = "Choose, or don't!";
	s.btnText = "Create";
	s.today = new Date();

	//setting up initial object that wil be in firebase, even if the fields are not filled in. 
	//This is created your object so that you have full control over your keys and values
	s.note = {
		dateCreatedReadable: $filter('date')(s.today, "fullDate"),
		dateCreatedMillisecs: Date.now(),
		dateUpdatedReadable: $filter('date')(s.today, "fullDate"),
		dateUpdatedMillisecs: Date.now(),
		title: '',
		author: UserStorageFactory.getCurrentUserProfileInfo().userName,
		category: '',
		content: '',
		uid: AuthFactory.getUser()
	};

	s.changeCategory = (e) => {
		let myCategory = $(e.target).html();
		s.category = myCategory;
		s.note.category = myCategory;
		console.log("You clicked..", s.note.category);
	};

	s.createNewNote = function() {
		console.log("Here is my note Data: ", s.note);
		if (s.note.author === undefined) {
			console.log("You need to make sure the user is logged in!! Here within NewNotesCtrl.js createNewNote()");
		} else if (s.note.title === undefined || s.note.category === undefined) {
			alert("Please make sure to give your note a title and category!");
		} else {
			console.log("About to send the note to firebase.");
			HandleFBDataFactory.postNewItem(s.note, "notes")
				.then(
					(response) => HandleFBDataFactory.getItemList('notes')
				).then(
					(profileObjFromfirebase) => $window.location.href = '#!/list'
				);
		}
	};
	
		
});