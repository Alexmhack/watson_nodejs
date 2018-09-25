import watson_developer_cloud

from decouple import config

# Set up Assistant service.
service = watson_developer_cloud.AssistantV1(
	username=config("WATSON_USERNAME"),  # replace with service username
	password=config("WATSON_PASSWORD"),  # replace with service password
	version=config("WATSON_VERSION")
)
workspace_id = config("WORKSPACE_ID")  # replace with workspace ID

# Start conversation with empty message.
response = service.message(
	workspace_id=workspace_id,
	input={
		'text': ''
	}
)

# Print the output from dialog, if any.
if response['output']['text']:
	print(response['output']['text'][0])
