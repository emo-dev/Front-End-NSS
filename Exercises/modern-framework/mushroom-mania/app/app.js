"use strict";
console.log("App.js is connected");

/*
An Angular application module.
One controller defined in your application. The controller will load the JSON with an XHR call using the $http function that Angular provides.
One partial bound to the controller.
Several directives will be helpful. ng-repeat, ng-click, and the filter property on the ng-repeat.
Load the JSON below into a new Firebase application rather than reading it from a local file.
Put the JSON object into $scope.mushrooms and bind that variable in your partial.
*/

var app = angular.module("MushroomsApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/partials/MushroomDisplay.html',
			controller: 'JSONLoadCtrl',
		})
		.otherwise('/');
});

app.run(($location, FBCreds) => {
	console.log("Hello! You are in app.js.");

	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain,
		databaseURL: FBCreds.databaseURL
	};

	firebase.initializeApp(authConfig);
});













