"use strict";
console.log("RegisterCtrl is working");

app.controller("RegisterCtrl", function($scope, AuthFactory) {
		let s = $scope;
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

		let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		months.forEach((month) => $(`<li ng-model="userInfo.birthMonth"><a>${month}</a></li>`).appendTo('.birth-month') );
		for (var year = 2017; year > 1950; year--) {
			$(`<li ng-model="userInfo.birthYear = userYear"><a ng-model="userYear">${year}</a></li>`).appendTo('.birth-year');
		}
		for (let day = 1; day < 32; day++) {
			if (day.toString().length === 1) {
				$(`<li ng-model="userInfo.birthDate" value="${day}""><a>0${day}</a></li>`).appendTo('.birth-date');
			} else {
				$(`<li ng-model="userInfo.birthDate" value="${day}""><a>${day}</a></li>`).appendTo('.birth-date');				
			}
		}

		s.updateBirthInfo = ($scope) => {
			console.log($scope.selected);
		};

		s.registerNewUser = () => {

			console.log("You clicked registerNewUser()");
			if (s.userInfo.firstName === undefined || s.userInfo.lastName === undefined || s.userInfo.email === undefined || s.userInfo.password === undefined || s.userInfo.reEnterPassword || undefined) {
				console.log("Here is your user info: ", s.userInfo);
				alert("Please fill out the required fields");
			} else if (s.userInfo.password !== s.userInfo.reEnterPassword) {
				console.log("Here is your user info: ", s.userInfo);
				alert("Please make sure your passwords are the same and try again.");
			} else {
				console.log("Here is your user info: ", s.userInfo);
				AuthFactory.createUser({email: s.userInfo.email, password: s.userInfo.password}).then(
						(userData) => console.log("RegisterCtrl new user: ", userData),
						(error) => console.log("Error creating user: ", error));
			}
		};

		// s.register = () => {
  //   	console.log("you clicked register");
	 //    AuthFactory.createUser({
	 //      email: s.account.email,
	 //      password: s.account.password
	 //    })
	 //    .then( 
	 //    	(userData) => {
		//       console.log("UserCtrl newUser:", userData);
		//       s.login();
		//     },
	 //      (error) => console.log("Error creating user:", error));
  // };
		
});















