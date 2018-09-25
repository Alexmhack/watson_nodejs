var AssistantV1 = require("watson-developer-cloud/assistant/v1");
require('dotenv').config()

// Setup assistant service wrapper
var service = new AssistantV1({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: process.env.WATSON_VERSION
})

var workspaceId = process.env.WORKSPACE_ID;
