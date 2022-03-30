# meldCX task

Welcome to the API!
Here's a quick breakdown of the available endpoints:

GET /
This page! Easy enough, right?

POST /login
Authenticate with server.

Parameters
Accepts: application/json

email: string
password: string
Responses
Content-Type: application/json

200 Success + Authentication Token (to be stored locally and used to check user is logged in; no expiry)
401 Unauthorized + Message
GET /devices
Fetch the latest list of active devices.

Responses
200 Success + List of devices which vary over time (you should poll every 5 seconds)
POST /notify
Sends us a nice little message, telling us you've finished! Be sure to set the repo URL to be your github repo URL for this test. Put whatever you like in your message (bonus points for puns) and be sure to send along your token in the header.

Headers
Authorization: Bearer [your login auth token]
Parameters
name: string
email: string
repoUrl: string
message: string
Responses
200 Success + Little message
400 Bad request + Message
401 Unauthorized + Message

Good luck!
