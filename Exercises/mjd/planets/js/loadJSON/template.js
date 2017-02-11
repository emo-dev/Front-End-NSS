"use strict";

let template = (data) => {

	let planetTemplate = ``;
	planetTemplate = 
		`<div id="${data.Name}" class="col-sm-6 col-md-4 col-md-4-offset-4 hidden">
	        <div class="thumbnail">
	            <img src="${data.Image}">
	            <div class="caption">
	            <h3>${data.Name}</h3>
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

module.exports = template;