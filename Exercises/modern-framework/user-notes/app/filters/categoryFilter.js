"use strict";

app.filter('filterFunction', function() {
	return function(items, userFilter, userSearch) {
		var filtered = [];
		console.log("Using filter. items: ", items, " userFilter: ", userFilter, " userSearch: ", userSearch);
		if (userFilter.length === 0 || userSearch.length === 0) {
			filtered = items;
		} else if (items === undefined) {
			console.log("Just waiting for the page to load, or maybe you ain't got nothin");
		} else {
			for (let i = 0; i < items.length; i++) {
				let item = items[i];
				console.log("This is your item obj: ", item);
				if (item[userFilter].toLowerCase().includes(userSearch.toLowerCase())) {
					filtered.push(item);
				}
			}
		}
		return filtered;
	};
});