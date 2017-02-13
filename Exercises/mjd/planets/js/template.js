"use strict";

let template = (data, dataName) => {

	let planetTemplate = ``;
	planetTemplate = 
		`<div id="${dataName}" class="planets hidden">
	        <div class="thumbnail">
	            <img src="${"images/" + dataName + ".jpeg"}">
	            <div class="caption">
	            <h3>${dataName}</h3>
	            <ul>
		            <li>${data.Discovered}</li>
		            <li>Mass: ${data.Mass}, Diameter: ${data.Diameter}</li>
		            <li>Distance from the Sun: ${data.DFTS}</li>
		            <li>Atmosphere composition: ${data["Atmosphere Comp"]}</li>
		            <li>${data.Satellites}</li>
		            <li>Probes (if any): ${data.Visited}</li>
	            </ul>
	          </div>
	        </div>
	    </div>`;
	return planetTemplate;
};

module.exports = {template};