"use strict";

app.controller("NavCtrl", function($scope, $location, AuthFactory, UserStorageFactory) {
	let s = $scope;

	$scope.$on('$routeChangeStart', function(next, current) { 
		let currentPath = current.$$route.originalPath;
	  if (currentPath === '/new' || currentPath === '/list') {
	   	s.userName = UserStorageFactory.getCurrentUserProfileInfo().userName + ' / ' + currentPath.slice(1);
	  }
	});

	s.currentPath = (pathToCheck) => {
		if (pathToCheck === $location.path()) {
			return true;
		}
	};

	s.checkLoginState = () => {
		if (AuthFactory.checkIfLoggedIn()) {
			return true;
		}
	};	

	s.logout = () => {
		s.userName = '';
		AuthFactory.logoutUser();
	};
	
	

});