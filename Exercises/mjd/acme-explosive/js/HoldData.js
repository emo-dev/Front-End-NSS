"use strict";
	

let myData = {};

let setData = (variableName, data) => {
		myData[variableName] = data;
};

let getData = () => {return myData;};

module.exports = {setData, getData};


