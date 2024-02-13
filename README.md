HOME TASK

1. Walk through the provided materials (official documentation, video) to understand how WDIO works and the main benefits of the tool.
2. Create an initial setup of WDIO on the local machine
3. Create WDIO config if it does not exist and familiarize
4. Create first specs using the existing BDD scenario created in Module 1
5. Execute these tests using CLI in different browsers (Chrome, Firefox, Safari) in headless mode
6. Execute tests in parallel using 2 instances
7. Add the option to run tests 2 times before marking it as failed
8. Push the code to remote repository and create Merge Request

Evaluation criteria (pass rate is 70%)
Here’s the list of actions which result in reduction of overall mark for a completed task:

1. WDIO set up with triavial mistatkes (-10%)
2. Not all scenarios from Module 1 are codded (each test -5%)
3. Tests are not run in all mentioned browsers (-10%)
4. Tests are not run in parallel (-5%)
5. Tests are not run in headless mode (-5%)
6. Retry to auto rerun test option isn’t added (-5%)

Feature: Site Functionality www.syncfusion.com

Rule: User Registration and Authentication

Scenario: User signs up successfully

Given the user is on the sign-up page
When they enter valid registration details
And click on the sign-up button
Then they should be redirected to the home page

Scenario: User logs in with correct credentials

Given the user is on the sign-in page
When they enter valid login credentials
And click on the sign-in button
Then they should be redirected to their account dashboard

Rule: Functionality APPOINTMENT PLANNER

Scenario: Edit phone number of a doctor
Given the user is on the doctors page
When they search for a doctor named "Nembo Lukeni"
And edit the phone number of the doctor
Then the phone number of the doctor should be updated successfully

Scenario: Add a new doctor
Given the user is on the doctors page
When they click on the "Add Doctor" button
And fill in the required details for the new doctor
And submit the form
Then the new doctor should be added successfully

Scenario: Change patient's email on the patients page
Given the user is on the patients page
When they search for a patient
And edit the patient's email
Then the patient's email should be updated successfully

Scenario: Find a patient named "Adams" on the patients page
Given the user is on the patients page
When they search for a patient named "Adams"
Then they should see the details of the patient named "Adams"

Scenario: Change patient's name in the calendar
Given the user is on the calendar page
When they select a patient's appointment
And change the patient's name
Then the patient's name should be updated in the appointment details

npm run wdio
