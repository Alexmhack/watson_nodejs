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
