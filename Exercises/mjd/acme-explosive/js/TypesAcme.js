"use strict";

var Acme = (function(Types) {


	Types.getTypes = (variableName) => {
		return new Promise((resolve, reject) => {
			let types = new XMLHttpRequest();

			types.addEventListener("load", function () {
				console.log("Loading " + variableName);
				Acme.setData(variableName, this.response);
				// myData[variableName] = this.response;
				resolve();
			});

			types.addEventListener("error", function() {
				console.log("Error occured with " + variableName);
				reject("Error within " + variableName);
			});

			types.open("GET", "../jsonFiles/types.json");

			window.setTimeout(function() {
				types.send();
			}, Math.random() * 2000);
		});
	};
	

	return Types;

})(Acme || {});






















