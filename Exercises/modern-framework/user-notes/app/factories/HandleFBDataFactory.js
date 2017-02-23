"use strict";

console.log("HandleFBDataFactory is connected!");

app.factory("HandleFBDataFactory", ($q, $http, FBCreds, AuthFactory) => {

	//This function goes to firebase, organizes the object returned, and 
	//stores it locally.
	let getItemList = () => {

		let items = [];
		let user = AuthFactory.getUser();

		return $q((resolve, reject) => {
			$http.get(`${FBCreds.databaseURL}/items.json?orderBy="uid"&equalTo="${user}"`)
				.then(
					(itemObject) => {
						let itemCollection = itemObject.data;
						console.log("This is your itemCollection from within ItemFactory.js getItemList(): ", itemCollection);
						if (itemCollection === null) {
							console.log("You have no data in firebase!");
							resolve(items);
						} else {
							console.log("I need to finish writing code in HandleFBDataFactory.js under getItemList()");
							resolve(items);
						}
				}).catch((error) => reject(error));
		});
	};


	let postNewItem = (newItem) => {
		return $q((resolve, reject) => {
			$http.post(`${FBCreds.databaseURL}/items.json`,
				JSON.stringify(newItem))
					.then((ObjectFromFirebase) => resolve(ObjectFromFirebase))
					.catch((error) => reject(error));
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


















