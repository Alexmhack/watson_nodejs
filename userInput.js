var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');
require('dotenv').config();

// setup watson assistant wrapper
var service = new AssistantV1({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: process.env.WATSON_VERSION
});

var workspace_id = process.env.WORKSPACE_ID;

service.message({
	workspace_id: workspace_id
}, processResponse);

function processResponse(err, response) {
	if (err) {
		// in case something went wrong
		console.error(err);
		return;
	}

	// if an intent was detected log to console.
	if (response.intents.length > 0) {
		console.log("Intents Detected: " + response.intents[0].intent);
	}

	// display the output from dialog if any
	if (response.output.text.length != 0) {
		console.log(response.output.text[0]);
	}

	// prompt the next user input
	var newMessageFromUser = prompt(">> ");
	service.message({
		workspace_id: workspace_id,
		input: { text: newMessageFromUser }
	}, processResponse)
}
