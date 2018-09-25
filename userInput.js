var prompt = require('prompt-sync')();
var AssistantV1 = require('watson-developer-cloud/assistant/v1');
require('dotenv').config();

// setup watson assistant wrapper
var service = new AssistantV1({
	username: process.env.WATSON_USERNAME,
	password: process.env.WATSON_PASSWORD,
	version: process.env.WATSON_VERSION
});
