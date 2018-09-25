var prompt = require('prompt-sync');
var AssistantV1 = requiret('watson-developer-cloud/assistant/v1');

var service = new AssistantV1({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: process.env.WATSON_VERSION
})

var workspace_id = process.env.WORKSPACE_ID;

// start conversation with empty message
service.message({
	workspace_id: workspace_id	
}, processResponse);

// process the service response
function processResponse(err, response) {
	if (err) {
		// in case of errors
		console.error(err);
		return;
	}

	// if an intent was detected log it on console
	if (response.intents.length > 0) {
		console.log("Detected Intents: " + response.intents[0].intent);
	}

	// Display the output from dialog if any
	if (response.output.text.length != 0) {
		console.log(response.output.text[0]);
	}

	// Prompt for the next round of input.
    var newMessageFromUser = prompt('>> ');
    // Send back the context to maintain state.
    service.message({
      workspace_id: workspace_id,
      input: { text: newMessageFromUser },
      context : response.context,
    }, processResponse)
}
