"use strict";
console.log("App.js is connected!");

/*
An Angular Application that allows users to create, save, edit, and delete notes
Each user wil have their own separate database within Firebase
There are 4 different screen displays
	1. Login
	2. Register
	3. List All Notes
	4. Create New Notes

Each page has a controller directly related to it.
*/

var app = angular.module("UserNotesApp", ["ngRoute"]);

app.config(function($routeProvider) {
	$routeProvider
		.when('/register', {
			templateUrl: '/partials/RegisterView.html',
			controller: 'RegisterCtrl',
		})
		.when('/login', {
			templateUrl: '/partials/LoginView.html',
			controller: 'LoginCtrl',
		})
		.when('/list', {
			templateUrl: '/partials/ListNotesView.html',
			controller: 'ListnotesCtrl',
		})
		.when('/new', {
			templateUrl: '/partials/NewNotesView.html',
			controller: 'NewNotesCtrl',
		})
		.otherwise('/register');
});

app.run(($location, FBCreds) => {

	let authConfig = {
		apiKey: FBCreds.apiKey,
		authDomain: FBCreds.authDomain,
		databaseURL: FBCreds.databaseURL
	};

	console.log("Here is your authConfig within app.js: ", authConfig);

	firebase.initializeApp(authConfig);
});













