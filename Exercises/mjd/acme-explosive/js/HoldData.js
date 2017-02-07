"use strict";
	
var Acme = (function(Start) {

	let myData = {};

	return {
		setData: function(variableName, data) {
			myData[variableName] = data;
		},

		getData: () => {console.log(myData);}
	};

})(Acme || {});

