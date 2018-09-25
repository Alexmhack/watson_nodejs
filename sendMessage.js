var AssistantV1 = require("watson-developer-cloud/assistant/v1");
require('dotenv').config()

// Setup assistant service wrapper
var service = new AssistantV1({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: process.env.WATSON_VERSION
})

var workspaceId = process.env.WORKSPACE_ID;

service.message({
	workspace_id: workspaceId
}, processResponse);

function processResponse(err, response) {
	if (err) {
		// in case something went wrong.
		console.error(err);
		return;
	}

	// Display the output from dialog, if any
	if (response.output.text.length != 0) {
		console.log(response.output.text[0]);
	}
}
