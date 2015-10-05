var page = require('webpage').create();
var browserInfo = require("../src/browserInfo");
page.open('about:blank', function(status) {
    console.log("Status: " + status);
	if (status === "success") {
		console.log("browserInfo:\n" + JSON.stringify(browserInfo, null, 2));
	}
	phantom.exit();
});