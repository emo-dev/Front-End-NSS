"use strict";

app.controller("RegisterCtrl", function($scope, $window, AuthFactory, HandleFBDataFactory, UserStorageFactory) {
		let s = $scope;
		s.currentUser = false;

		s.userInfo = {
			firstName: "",
			lastName: "",
			email: "",
			userName: "",
			password: "",
			reEnterPassword: "",
			birthDate: "",
			birthMonth: "",
			birthYear: ""
		};

		s.currentLocation = window.location;
		console.log(s.currentLocation.hash);

		s.days = [];
		s.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		s.years = [];
		// months.forEach((month) => $(`<li ng-click="updateBirthInfo(${month}, birthMonth)"><a>${month}</a></li>`).appendTo('.birth-month') );
		for (var year = 2017; year > 1950; year--) {
			s.years.push(year);
		}
		for (let day = 1; day < 32; day++) {
			if (day.toString().length === 1) {
				s.days.push('0'+ day);
			} else {
				s.days.push(day);
			}
		}

		s.updateBirthInfo = (birthValue, location) => s.userInfo[location] = birthValue;

		s.registerNewUser = () => {

			console.log("You clicked registerNewUser()");
			console.log(s.userInfo);
			if (s.userInfo.firstName.length === 0 || s.userInfo.lastName.length === 0 || s.userInfo.userName.length === 0 || s.userInfo.email.length === 0 || s.userInfo.password.length < 6 || s.userInfo.reEnterPassword.length < 6) {
				console.log("Here is your user info: ", s.userInfo);
				alert("Please fill out the required fields");
			} else if (s.userInfo.password !== s.userInfo.reEnterPassword) {
				console.log("Here is your user info: ", s.userInfo);
				alert("Please make sure your passwords are the same and try again.");
			} else {
				console.log("Here is your user info: ", s.userInfo);
				AuthFactory.createUser({email: s.userInfo.email, password: s.userInfo.password}).then(
						(userData) => {
							console.log("RegisterCtrl new user: ", userData);
							AuthFactory.changeLogin(true);
							s.userInfo.uid = userData.uid;
							s.userInfo.password = "";
							s.userInfo.reEnterPassword = "";
							AuthFactory.setUserInfo(s.userInfo);
							HandleFBDataFactory.postNewItem(s.userInfo, 'profiles').then(
								(profileObjFromFirebase) => {
									console.log("Here is your profile info from firebase: ", profileObjFromFirebase);
									UserStorageFactory.setCurrentUserProfileInfo(s.userInfo);
									s.userInfo = {};
									$window.location.href = "#!/list";
								});
						},
						(error) => console.log("Error creating user: ", error)
					);
				}
			};

	
		
});















