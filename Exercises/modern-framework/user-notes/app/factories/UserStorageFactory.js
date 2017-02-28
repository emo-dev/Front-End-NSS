"use strict";

app.factory("UserStorageFactory", function() {

	let currentUserProfileInfo = '';
	let currentUserNotes = '';

	let setCurrentUserProfileInfo = (profileObj) => {
		return new Promise((resolve) => {
			localStorage.setItem('profile', JSON.stringify(profileObj));
			resolve();
		});
	};
	let getCurrentUserProfileInfo = () => JSON.parse(localStorage.getItem('profile'));

	let setCurrentUserNotes = (notesObj) => {
		return new Promise((resolve) => {
			localStorage.setItem('notes', JSON.stringify(notesObj));
			resolve();
		});
	};
	let getCurrentUserNotes = () => JSON.parse(localStorage.getItem('notes'));


	return {setCurrentUserProfileInfo, getCurrentUserProfileInfo, setCurrentUserNotes, getCurrentUserNotes};
});
