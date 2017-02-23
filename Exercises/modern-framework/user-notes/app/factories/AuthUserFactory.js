"use strict";

console.log("AuthFactory is connected!");

app.factory("AuthFactory", function() {

	//currentUser, createUser, loginUser, logoutUser, isAuthenticated, getUser
	let currentUser = null;

	let createUser = (userObj) => firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
			.catch( (error) => console.log("error: ", error.code, error.message));
	
	let loginUser = (userObj) => firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (error) => console.log("error:", error.code, error.message));
	
	let logoutUser = function(){
		console.log("logoutUser");
		return firebase.auth().signOut();
	};


	let isAuthenticated = function (){
		console.log("AuthFactory: isAuthenticated");
		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				console.log("Here is your user from AuthFactory: ", user);
				if (user){
					currentUser = user.uid;
					resolve(true);
				}else {
					resolve(false);
				}
			});
		});
	};

	let getUser = () => currentUser;
	let provider = new firebase.auth.GoogleAuthProvider();
	let authWithProvider = () => firebase.auth().signInWithPopup(provider);

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider};
});
