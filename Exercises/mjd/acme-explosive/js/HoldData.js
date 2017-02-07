"use strict";
	
var Acme = (function(Start) {

	let myData = {};

	return {
		setData: function(variableName, data) {
			myData[variableName] = data;
		},

		getData: function() {console.log(myData);}
	};

})(Acme || {});

