"use strict";
console.log("RegisterCtrl is working");

app.controller("RegisterCtrl", function($scope, AuthFactory) {
		let s = $scope;
		s.currentUser = false;

		s.userInfo = {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			reEnterPassword: "",
			birthDate: "",
			birthMonth: "",
			birthYear: ""
		};

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

		s.updateBirthInfo = (birthValue, location) => {
			console.log("You clicked: ", birthValue);
			s.userInfo[location] = birthValue;
		};

		s.registerNewUser = () => {

			console.log("You clicked registerNewUser()");
			if (s.userInfo.firstName.length === 0 || s.userInfo.lastName.length === 0 || s.userInfo.email.length === 0 || s.userInfo.password.length < 6 || s.userInfo.reEnterPassword.length < 6) {
				console.log("Here is your user info: ", s.userInfo);
				alert("Please fill out the required fields");
			} else if (s.userInfo.password !== s.userInfo.reEnterPassword) {
				console.log("Here is your user info: ", s.userInfo);
				alert("Please make sure your passwords are the same and try again.");
			} else {
				console.log("Here is your user info: ", s.userInfo);
				AuthFactory.createUser({email: s.userInfo.email, password: s.userInfo.password}).then(
						(userData) => console.log("RegisterCtrl new user: ", userData),
						(error) => console.log("Error creating user: ", error)
					).then(
						(myUser) => console.log("Here is my user within RegisterCtrl.js registerNewUser(): ", myUser)
					);
			}
		};

	
		
});















