"use strict";


Acme.getCategories("categories").then(

	Acme.getTypes("types"),
	(errorMessage) => console.error(errorMessage)

).then(

	Acme.getProducts("products"),
	(errorMessage) => console.error(errorMessage)

).then(

	Acme.grabData,
	(errorMessage) => console.log(errorMessage)

);