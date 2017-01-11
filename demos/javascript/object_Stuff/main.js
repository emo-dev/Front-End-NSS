var validation_message = {
	"key_1": {
		"your_name": "jimmy",
		"your_msg": "hello world"
	},
	"key_2": {
		"your_name": "billy",
		"your_msg": "foo equals bar"
	}
}

for (var i in validation_message) {
	if (validation_message.hasOwnProperty(i)) {
		var obj = validation_message[i];
		for (var prop in obj) {
			if (obj.hasOwnProperty(prop))
				alert(prop + "=" + obj[prop]);
		}
	}
}








