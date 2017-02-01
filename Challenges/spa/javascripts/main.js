'use strict';









var CarLot = (function(Populate) {


	Populate.populatePage = function(inventory) {
	    // Loop over the inventory and populate the page
	    console.log(inventory);
	    var carContainer = document.getElementsByClassName("carLot")[0];
	    var carList = inventory["cars"];
	    var counter = 0;
		var theWrapperId;
		function createWrapper(){
			var carWrapper = document.createElement("div");
			carWrapper.classList.add("container");
			carWrapper.classList.add("row");
			carWrapper.id = "container--" + counter;
			carContainer.appendChild(carWrapper);
		};    

	    for (var car = counter; car < carList.length; car++) {

	    	if (counter % 3 == 0) {
	    		createWrapper();
	    	};

			var myCar = carList[car];
		  	var carData = ``;
		  	carData +=  `<div class="col-sm-6 col-md-4">
						    <div class="thumbnail">
						        <h2>${Object.values(myCar)[0]}, ${Object.values(myCar)[1]}</h2>
						        <p>Year: ${Object.values(myCar)[2]}</p>
						        <p>Price: ${Object.values(myCar)[3]}</p>
						        <p>${Object.values(myCar)[4]}</p>
						        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
						    </div>
						</div>`;

			// Now that the DOM is loaded, establish all the event listeners needed
			// CarLot.activateEvents();
			carContainer.lastChild.innerHTML += carData;
			counter++;
		}
	};


	// Load the inventory and send a callback function to be
	// invoked after the process is complete

	return Populate;

})(CarLot || {});

CarLot.loadInventory(CarLot.populatePage);
CarLot.addingEvents(addingBorder);


























