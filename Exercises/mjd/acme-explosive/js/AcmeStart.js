"use strict";


Acme.getCategories().then(

	() => {return Acme.getTypes()},
	(errorMessage) => console.error(errorMessage)

).then(

	() => {return Acme.getProducts()},
	(errorMessage) => console.error(errorMessage)

);