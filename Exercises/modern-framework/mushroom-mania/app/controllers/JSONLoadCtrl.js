"use strict";
console.log("JSONLoadCtrl is working");

app.controller("JSONLoadCtrl", function($scope, FBCallsFactory, FilterFactory) {
		let s = $scope;
		s.searchText = FilterFactory;
    s.mushrooms = [];

    FBCallsFactory.getItemList().then(
    		(mushroomArr) => {
	    		mushroomArr.forEach((mushroom) => s.mushrooms.push(mushroom));
	    		console.log("Check it: ", s.mushrooms);			
    		});
});