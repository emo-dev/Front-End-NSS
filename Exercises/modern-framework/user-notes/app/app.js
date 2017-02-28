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


//resolve for the app to check whether or not a user is logged in
let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
	console.log("I am here");
	AuthFactory.isAuthenticated()
		.then((userExists) => {
			console.log("userExists", userExists);
			if (userExists) {
				AuthFactory.changeLogin(true);
				console.log("Authenticated, go ahead");
				resolve();
			} else {
				console.log("Authentication rejected, go away.");
				reject();
			}
		});
});


app.config(function($routeProvider, $locationProvider) {
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
			controller: 'ListNotesCtrl',
			resolve: {isAuth}
		})
		.when('/new', {
			templateUrl: '/partials/NewNotesView.html',
			controller: 'NewNotesCtrl',
			resolve: {isAuth}
		})
		.otherwise('/login');
});

app.run(($location, FBCreds) => {
	console.log("Here is your authConfig within app.js: ", FBCreds);
	firebase.initializeApp(FBCreds);
});













