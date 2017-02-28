"use strict";

app.factory("AuthFactory", function($window) {

	let loggedInUserInfo = {};
	let currentUser = '';
	let isLoggedIn = false;

	//currentUser, createUser, loginUser, logoutUser, isAuthenticated, getUser

	let createUser = (userObj) => firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password)
			.catch( (error) => console.log("error: ", error.code, error.message));
	
	let loginUser = (userObj) => firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password)
		.catch( (error) => {
			console.log("error:", error.code, error.message);
			$window.location.href = '#!/login';
		});
	
	let logoutUser = function(){
		console.log("logoutUser");
		isLoggedIn = false;
		localStorage.removeItem('notes');
		localStorage.removeItem('profile');
		return firebase.auth().signOut();
	};

	let checkIfLoggedIn = () => {
			if (isLoggedIn) {
				return isLoggedIn;
			} else {
				return isLoggedIn;
			}
	};

	let changeLogin = (loginState) => isLoggedIn = loginState;
	
	let isAuthenticated = function () {
		console.log("AuthFactory: isAuthenticated");
		return new Promise ( (resolve, reject) => {
			firebase.auth().onAuthStateChanged( (user) => {
				console.log("Here is your user from AuthFactory: ", user);
				if (user){
					currentUser = user.uid;
					console.log("Here is your var currentUser (uid) from AuthUserFactory.js isAuthenticated(): ", currentUser);
					resolve(true);
				}else {
					resolve(false);
				}
			});
		});
	};

	let getUser = () => currentUser;
	let setCurrentUser = (userID) => currentUser = userID;

	let setUserInfo = (userObj) => {
		loggedInUserInfo = userObj;
		console.log("Here is your loggedInUserInfo from AuthUserFactory.js setUserInfo()", loggedInUserInfo);
	};
	let getUserInfo = () => loggedInUserInfo;

	let provider = new firebase.auth.GoogleAuthProvider();
	let authWithProvider = () => firebase.auth().signInWithPopup(provider);

	return {createUser, loginUser, logoutUser, isAuthenticated, getUser, authWithProvider, getUserInfo, setUserInfo, checkIfLoggedIn, changeLogin, setCurrentUser};
});
