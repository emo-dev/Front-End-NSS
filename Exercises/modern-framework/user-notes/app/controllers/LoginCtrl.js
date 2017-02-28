"use strict";

app.controller("LoginCtrl", function($scope, $location, $window, AuthFactory, HandleFBDataFactory, UserStorageFactory) {
	let s = $scope;

	//Holds email and password information when a user logs back in to send to firebase
	s.account = {
		email: "",
		password: ""
	};

	//takes s.account and sends the obj to AuthFactory.js to log the user in. 
	//Also changes the window to /list view
	s.login = () => {
  	console.log("you clicked login");
  	AuthFactory.loginUser(s.account).then( 
  		(userData) => {
				console.log("LoginCtrl.js login user: ", userData.uid);
				AuthFactory.setCurrentUser(userData.uid);
				
				HandleFBDataFactory.getItemList('profiles').then(
					(profileObjFromFirebase) => {
						console.log("Here is your profile info from firebase: ", profileObjFromFirebase);
						HandleFBDataFactory.getItemList('notes').then(
							(notesObjFromFirebase) => {
								$window.location.href = '#!/list';													
							}
						);
					});				
			},
			(error) => console.log("Error creating user: ", error)
    );
	};


	//
	s.loginGoogle = () => {
	console.log("you clicked login with Google");
	AuthFactory.authWithProvider()
		.then(
			(userInfo) => {
	    	console.log("logged in user:", userInfo);
	    	AuthFactory.setCurrentUser(userInfo.user.uid);
	    	HandleFBDataFactory.getItemList('profiles').then(
    			(profilesObjData) => UserStorageFactory.setCurrentUserProfileInfo(profilesObjData)
    		).then(
    			() => HandleFBDataFactory.getItemList('notes')
    		).then(
    			(notesObjData) => UserStorageFactory.setCurrentUserNotes(notesObjData)
    		).then(
    			() => {
    				$window.location.href = '#!/list';
    			}
    		);	    		
		}).catch(
			(error) => {
	    	// Handle the Errors.
	    	console.log("error with google login", error);
	    	AuthFactory.changeLogin(false);
	    	var errorCode = error.code;
	    	var errorMessage = error.message;
	    	// The email of the user's account used.
	    	var email = error.email;
	    	// The firebase.auth.AuthCredential type that was used.
	    	var credential = error.credential;
	  		// ...
			});
	};
});