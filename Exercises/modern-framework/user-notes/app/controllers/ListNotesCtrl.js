"use strict";

app.controller("ListNotesCtrl", function($scope, $window, HandleFBDataFactory, UserStorageFactory) {
	let s = $scope;

	//array to hold note objs from UserStorageFactory.js
	s.notes = [];
	//profile obj {firstName, lastName, email, userName, birthDate, birthMonth, birthYear}
	s.profile = UserStorageFactory.getCurrentUserProfileInfo();

	//var to contain user text input from category search 
	s.filterText = '';
	//gets changed on click
	s.filterDropdown = 'Narrow it down!';
	s.userFilterChoice = 'title';

	s.paraLimit = 130;

	
	//for loop to grab each of the user's note from UserStorageFactory.js and 
	//push them inso s.notes
	let notesFromFactory = UserStorageFactory.getCurrentUserNotes();
	for (var note in notesFromFactory) {
		s.notes.push(notesFromFactory[note]);
	}
	console.log("Here are your current notes from ListNotesCtrl.js s.notes", s.notes);

	//Updates the dropdown button and what the user filters by on click
	s.updateFilter = (whatToFilter, dropdownchange) => {
		s.filterDropdown = dropdownchange;
		s.userFilterChoice = whatToFilter;
	};

	//Not available yet
	s.itemDelete = function(itemID) {
		HandleFBDataFactory.deleteItem(itemID)
			.then(function(response) {
				HandleFBDataFactory.getItemList()
					.then(
						(itemCollection) => s.items = itemCollection
			);}
		);
	};
		
});