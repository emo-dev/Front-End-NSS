"use strict";

app.factory("HandleFBDataFactory", ($q, $http, FBCreds, AuthFactory, UserStorageFactory) => {

	//This function goes to firebase, organizes the object returned, and 
	//stores it locally.
	let getItemList = (location) => {

		let user = AuthFactory.getUser();

		console.log("I am now within HandleFBDataFactory.js getItemList()");

		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/${location}.json?orderBy="uid"&equalTo="${user}"`).then(
					(itemObject) => {
						console.log("This is your itemCollection from within ItemFactory.js getItemList(): ", itemObject.data);
						if (itemObject.data === null) {
							console.log("You have no data in firebase!");
							resolve();
						} else {
							console.log("Sending the data to be stored in UserStorageFactory.js from getItemList()");
							if (location === 'profiles') {
								AuthFactory.changeLogin(true);
								let profileInfo = itemObject.data[Object.keys(itemObject.data)[0]];
								console.log("You are sending this profile info to be set within UserStorageFactory.js: ", profileInfo);
								UserStorageFactory.setCurrentUserProfileInfo(profileInfo);
								resolve(profileInfo);								
							} else if (location === 'notes') {
								let notesInfo = itemObject.data;
								console.log("You are sending this notes info to be set within UserStorageFactory.js: ", notesInfo);
								UserStorageFactory.setCurrentUserNotes(notesInfo);
								resolve(notesInfo);						
							}
						}
				}).catch((error) => reject(error));
		});
	};


	let postNewItem = (newItem, location) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/${location}.json`,
				JSON.stringify(newItem))
					.then(
						(ObjectFromFirebase) => {
							console.log("Here is my obj from firebase from HandleFBDataFactory.js postNewItem(): ", ObjectFromFirebase);
							resolve(ObjectFromFirebase);
						})
					.catch((error) => error);
		});
	};


	let deleteItem = (itemID) => {
		console.log("Within ItemFactory.js deleteItem(): ", itemID);
		return $q((resolve, reject) => {
			$http.delete(`${FBCreds.databaseURL}/items/${itemID}.json`)
				.then((ObjectFromFirebase) => resolve(ObjectFromFirebase));
		});
	};

	return {getItemList, postNewItem, deleteItem};

});


















