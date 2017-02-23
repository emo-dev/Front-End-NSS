"use strict";

app.factory("FBCallsFactory", function($q, $http, FBCreds) {

	let getItemList = () => {
		let items = [];

		return $q((resolve, reject) => {
			console.log("Database Url: ", FBCreds.databaseURL);
			$http.get(`${FBCreds.databaseURL}/mushrooms.json`)
				.then(
					(itemObject) => {
						console.log("This is your data: ", itemObject);
						let itemCollection = itemObject.data.mushrooms;
						if (itemCollection === null) {
							console.log("You have no data in firebase!");
							resolve(items);
						} else {
							Object.keys(itemCollection).forEach((key) => {
								let myMushroom = {};

								myMushroom.name = Object.keys(itemCollection[key])[0];
								myMushroom.edible = itemCollection[key][myMushroom.name].edible;
								myMushroom.description = itemCollection[key][myMushroom.name].description;
								myMushroom.color = myMushroom.edible ? "#a5d6a7" : "#ef5350";

								items.push(myMushroom);
							});
							console.log("Here is my 'items' list: ", items);
							resolve(items);
						}
				}).catch((error) => reject(error));
		});
	};


	return {getItemList};
});
