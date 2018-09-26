var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');
require('dotenv').config();

var service = new AssistantV1({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: process.env.WATSON_VERSION
});

var workspace_id = process.env.WORKSPACE_ID;

// start conversation with empty message
service.message({
	workspace_id: workspace_id
}, processResponse);

function processResponse(err, response) {
	if (err) {
		// in case of errors
		console.error(err)
		return;
	}

	var endConversation = false;

	// check the action flag
	if (response.output.action == 'display_time') {
		// user asked about the time, so we display it
		console.log("The current time is: " + new Date().toLocaleTimeString() + '.');
	} else if (response.output.action == 'end_conversation') {
		// user said goodbye, so we end the conversation
		console.log(response.output.text[0]);
		endConversation = true;
	} else {
		// display the dialog if any
		if (response.output.text.length != 0) {
			console.log(response.output.text[0]);
		}
	}

	// if we are not done, prompt the user for input
	if (!endConversation) {
		var newMessageFromUser = prompt(">> ");
		service.message({
			workspace_id: workspace_id,
			input: { text: newMessageFromUser },
			context: response.content,
		}, processResponse)
	}
}
