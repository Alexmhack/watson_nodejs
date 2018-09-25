# watson_nodejs
Interacting with the Watson Assistant service using the javascript sdk

Install the NodeJs module that is used to interact with watson developer cloud.

```
npm install -g watson-developer-cloud
```

**Note:** ```-g``` stores the node module globally in the local computer.

You will need a workspace in the **Watson Assistant Service** through which you 
will get the service information.

## Getting Service Information
To access the Watson Assistant service REST APIs, your application needs to be 
able to authenticate with IBM® Cloud and connect to the right Watson Assistant 
workspace. You'll need to copy the service credentials and workspace ID and paste 
them into your application code.

To access the service credentials and the workspace ID from your workspace, 
select the Menu menu, choose Deploy, and then go to the Credentials tab.

You can also access the service credentials from your IBM® Cloud dashboard.

## Communicating with the Watson Assistant service
Interacting with the Watson Assistant service is simple. Let's take a look at an 
example that connects to the service, sends a single message, and prints the 
output to the console:

Inside ```sendMessage.js``` file we sets up service wrapper, sends initial 
message, and receives response.

We use [dotenv](https://github.com/motdotla/dotenv) to access the ```.env``` 
variables since we need to keep the watson credentials secret.

```
npm install -g dotenv
```

Read the documentation for ```dotenv``` for more details on how to use it or take 
a look at ```sendMessage.js``` file.
