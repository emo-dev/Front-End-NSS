'use strict';




var CarLot = (function(Events) {

    return {

    	removingBorder: function() {
    		var thumbnails = document.getElementsByClassName("thumbnail");
			console.log(typeof thumbnails);
			for (var carElement = 0; carElement < thumbnails.length; carElement++)	{
				if (thumbnails[carElement].classList.contains("highBorder")) {
					thumbnails[carElement].classList.remove("highBorder");
					thumbnails[carElement].style.removeProperty("background-color");
				}
			};
    	},

    	addingBorder: function(parent, myself, color) {
    		if (parent.classList.contains("thumbnail")) {
				parent.classList.add("highBorder");
				parent.style.backgroundColor += color;
			} else {
				console.log(myself);
				myself.classList.add("highBorder");
				myself.style.backgroundColor += color;
			}
    	},

    	unFocusInput: function() {
    		var descriptionInput = document.getElementsByTagName("input")[0];
    		
    		descriptionInput.addEventListener("change", function(event) {
    			event.target.blur();
    			event.target.value = '';
    			CarLot.removingBorder();
    		});

    		var navForm = document.getElementsByClassName("navbar-form")[0].childNodes;
    		// var targetButton = navForm.getElementsByTagName("button");
    		for (var children = 0; children < navForm.length; children++) {
    			if (navForm[children].tagName == "BUTTON") {
    				navForm[children].addEventListener("click", function() {
    					descriptionInput.blur();
    					descriptionInput.value = '';
    					CarLot.removingBorder();
    				})
    			}
    		}
    		return navForm;
    	},

    	deleteCarCard: function() {
    		document.addEventListener("click", function() {
    			var targetedThumbnail = document.getElementsByClassName("highBorder");
    			console.log(event.target.parentNode.parentNode);
    			if (event.target.parentNode.parentNode.classList.contains("highBorder")) {


    				event.target.parentNode.parentNode.parentNode.removeChild(targetedThumbnail[0]);
	    			console.log("yes");
    			}
    		});
    	},

    	updateDescription: function() {
    		var descriptionInput = document.getElementsByTagName("input")[0];

    		descriptionInput
    		.addEventListener("keyup", function() {

	    		var targetedThumbnail = document.getElementsByClassName("highBorder");
	    		if (targetedThumbnail.length == 0) {
	    			event.target.value = '';
	    		} else {
		    		var thumbnailChildren = targetedThumbnail[0].children;
		    		for (var child = 0; child < thumbnailChildren.length; child++) {
		    			if (thumbnailChildren[child].classList.contains("car-Description")) {
		    				console.log(thumbnailChildren[child]);
		    				thumbnailChildren[child].innerHTML = event.target.value;
		    			}
		    		};
		    		return targetedThumbnail;
	    		}
    		})
    		
    	},

    	addingEvents: function() {
    		document.getElementsByTagName("body")[0]

    		.addEventListener("click", function(event){
    			var theParent = event.target.parentNode;
    			var myself = event.target;
    			var carDescription = theParent.getElementsByClassName("car-Description")[0];
	    		if (theParent.classList.contains("thumbnail") || myself.classList.contains("thumbnail")) {
	    			CarLot.removingBorder();
	    			CarLot.addingBorder(theParent, myself, "lightblue");
	    			document.getElementsByTagName("input")[0].focus();
    			}
    		})
    	}
    }

})(CarLot || {});


CarLot.addingEvents();
CarLot.updateDescription();
CarLot.unFocusInput();
CarLot.deleteCarCard();

