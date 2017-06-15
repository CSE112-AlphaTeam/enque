First Run
----------------------------
1. Setup Account with [mLab](https://mlab.com/)
2. Clone from repository to desired directory
3. Install [Node.js](http://nodejs.org/download/)
4. Navigate to the root directory
5. Install npm dependencies:

        $ npm install
        $ npm install --global gulp

6. Use the ``gulp`` command to run the application
7. This will navigate your browser to [http://localhost:4000](http://localhost:4000/)

Push to testing environment
----------------------------
1. Simply push your experimental changes to the ``development`` branch.
2. Ask for code review from people with write access before being allowed to merge.
2. Changes may be view on the [staging site](https://alpha-team-development.herokuapp.com/).

Logging in as Peter
----------------------------
In order to login as peter, use the following credentials

	username: peter@enque.com
	password: peter
	
The live app can be found [here](https://alpha-team.herokuapp.com/).

Talk to the Facebook Messenger bot
An Example Conversation:
1. To start a conversation, initiate by typing "Hi" or "Hello"
2. State "I'd like to make an appointment"
3. The bot will ask for the company name, then time and phone number
4. After you input the information, it will confirm the appointment

Talk to the SMS bot
-----------------------------
An Example Conversation
1. To start a conversation, initiate by typing "Hi" or "Hello"
2. Type "Appointment" to make an appointment, and the bot will prompt for the following action to continue
3. Type "Cancel" to go back to the main menu
4. Type "Remind" to pull out information after making an appointment
	
Access to CI platform on Travis
----------------------------
Go to the [Travis](https://travis-ci.org/) website.
Travis is based on your GitHub account.
Sign in to Travis with your GitHub credentials, then find the
CSE112-AlphaTeam/enque repository

Click the restart button on the latest build to rebuild it.
