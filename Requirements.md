 Requirements
 
## Dictionary 
- Preferred Contacts: A collection of users that allow for easier method of contact.
- Pre-work routines: A list holding action items that can be completed, intended to prime or prepare the user before working. 
- Settings: Configurable options that can be changed and altered to change the functionality of the web application.
- Schedule: A calendar/planner that holds information regarding events.
- Theme: Dictates the look and style of Daily Grind, where the theme encompasses the colour scheme and aesthetics of the website. Used to personalize the user experience to their desired look.
- Time-Sensitive Alert: A notification message that is sent whenever the event is close to occurring.
- To-Do List: A list holding action items that need to be completed, where list items can be prioritized based on importance. 
- Work Websites: Websites that have been blocked for a given duration to avoid distractions and maintain focus. 
- Organization: A group of users who work together.


## System Requirements
- [complete] *The Daily Grind* will be a web application
    - **Verification**: No verification is needed because our team already determined that a web based application framework will be used for the build of our application.
- [complete] 9 Responsive web pages will be used to adjust the layout and assets on the page to fit the user’s screen resolution
    - **Verification**: Manual tests will be conducted to verify that all 9 web pages are built and that they are able to adjust the layout and assets based on changes in user screen resolution. 
- [?] Changing between web pages on DailyGrind will have 1 second or less response times
    - **Verification**: Automated testing to ensure that loading new pages will take less than one second. Also changes to the page triggered by user actions will take less than one second.
- [complete?] Will adjust to mobile, small, medium, large, and extra large user screen sizes
    - **Verification**: Manual testing to verify that our application is formatted correctly for each screen size and app functions correctly on each screen size layout. 
- [complete] System will be created with the React framework.
    - **Verification**: Code review will take place to ensure that the system, pages, and assets are built to the specifications of a React framework.  
- [complete] All images will include alt labels.
    - **Verification**: Code review to ensure that all images contain an alt label. Automated testing will also be done to ensure that alt labels are created on <img> tags
- [incomplete] Aria labels will be included on assets.
    - **Verification**: Code review and inspection will take place to verify the presence of aria labels on all assets of our application. Automated testing will also be used to ensure that an aria label is found on every asset of our application.
- [? revised?] Google api will be used to sync user calendars with DailyGrind’s
    - **Verification**: Manual test will be conducted to verify that the Google Calendar API is able to be reached by the user. And that synced calendars are consistent in information stored on them by comparing our applications front end calendar with the Google calendar as well as looking for google created calendar events in our Firebase database.  
- [complete] Data will be stored through Firebase.
    - **Verification**: Manual testing will be done to verify that our application will connect and transfer data with our FireBase database. Dummy data will also be sent to the Firebase database to ensure that all data is correctly stored within the db. Any front end assets communicating with our database will be tested by inputting sample data and checking the Firebase db to make sure that data was received and stored appropriately. 

## Loading Screen & Home Page
![login page](img/Home_1.jpg)
- [complete] When the user logs in, the user will be directed to the home-page which will display the current date (Month name, Date Number, i.e. April 22) and day of the week, where the information will be in the center of the screen.
    - **Verification**: Visual verification will be done for the home page. The date and day of the week is visible in the center of the screen.
- [complete] When the user is not signed in, the user will be able to sign in by clicking sign in on the navi bar.
    - **Verification**: Visual verification will be done to check if a sign in button is visible when the user is not signed in. A manual test will be done to see if clicking the button pulls up a log in window where the user can input their account information and log in.
- [complete] When the user is signed into the site, the user will have an option to sign-out by navigating through the menu to the sign-out button. 
    - **Verification**: Visual verification will be done to see if a sign out button is visible when a user is logged in and a manual test will be done to see if clicking the button logs the user out, changing the button back to a sign-in button and clearing user specific information from the site.
- [?] The user will be able to access settings, schedule, to-do lists, pre-work routines, profile, and breaks from the home page through a nav bar with clickable links to the respective pages.
    - **Verification**: Visual verification will be done to make sure that the navigation bar displays 6 buttons labeled appropriately. Manual testing will be done to ensure that each of these buttons takes the user to the proper page. 

## Sign-In & Sign-Up
- [revised: We are no longer allowing Google Sign-On, as we found it unnecessary in creating our solution] Users will be able to create an account by filling out a form or via Google 
    - [revised: We found no need to require a name at sign-up, only in Settings] The sign up form will require an email, password, and name. 

- [complete] When the user is not signed in, the user will be able to sign in by clicking sign in on the navigation bar.
    - **Verification**: Manual testing will be done by attempting to create and account by filling out and submitting the sign up form and signing in via Google. If successful, a new user’s information will be added to the Firebase database.
- [?] User cookies will time out after 48 hours.
    - **Verification**: A code review will be done to check that the expiration time of the cookie is set to 48 hours and that the time is being passed into the cookie expiration function

## Settings
![settings page](img/settings1.jpeg)
- [] The navigation bar will have a button titled “Settings” that, when clicked, will take the user to the settings page.
    - **Verification**: Manual testing will be completed by analyzing whether clicking upon the settings tab will take the user to the settings page. Successful testing if clicking the settings button leads to the settings page without anyissues. 
- [complete?] The settings page will allow users to toggle which applications have access and authority to connect to Daily Grind.
    - **Verification**: There will be a visual inspection to ensure this appears on the user interface.
- [complete?] Applications that are in the authorization page will have a toggle form, where enabling the toggle will allow applications to connect to Daily Grind while disabling will prevent applications from connecting to Daily Grind.
    - **Verification**: There will be a manual test to ensure that the toggle works on the user's end & changes the authorization on the system's end.
- [complete?] Account settings can be changed by clicking on the “My Account” tab under user settings, by clicking on the edit button, allowing for change to either name, email, organization, and theme.
    - **Verification**: There will be a manual test to test that user data is stored to their account upon editing. Automated testing by sending the information sent to Firebase database and retrieving the information back from Firebase and comparing the information sent/retrieved from Firebase and checking if they’re the same pieces of information.  

## Scheduling/Calendar
![main calendar screen](img/calendar_priti.jpeg)
- [revised: Default view is no longer customizable, it will default to monthly view. All views are still available.] Upon opening the scheduling page, the system will show a calendar and display the day/week/month view based on user settings from the settings page
    - [revised: Buttons are on the right-hand side of the page.] Buttons centered above the calendar for viewing the calendar daily, weekly, or monthly will allow for switching between views  
    - **Verification**: Visual verification/ manual testing to ensure that all the buttons are present and layed out as described above. Also the calendar views associated with each button will also be manually tested and visually verified to ensure that the correct view is created for each button.
    
![add event screen](img/Schedule_2.jpg)
- [complete] A button with a “plus” icon will allow the addition of new events. 
    - **Verification**: Manual test to ensure that a new event form model appears when the new event plus icon is triggered by a user
- [complete] Clicking this button will open up a new event form modal for users to input information about the event containing the following specifications: 
    1. [?] The title of “Create New Event” is at the top of the form, center-aligned in 16 pt font
    2. [complete] It will display the text “Event Name” aligned left with a text input field to the right of Event Name
    3. [complete] It will display the text “Event Date” below Event Name aligned left with a text input field to the right of Event Date. 
        - The input will be constrained to the format “MM/DD/YYYY”
    4. [complete] It will display the text “Time Range” below Event Date aligned left with two input fields to the right of Time Range with “to” in-between them. 
        - [complete] There will be a toggle for AM/PM to the right of both input fields
        - [complete] The input will be constrained to the format “HH:MM”
    5. [complete] It will display the text “Location” aligned left with a text input field to the right of Location
    6. [complete] It will display the text “Event Description” aligned left with a text input field below the text
        - [revised: Users will be able to manually edit the height of the input field.] The input field will automatically increase in height to accommodate all user inputted text
        - [?] The input will be constrained to 500 characters
    7. [complete] It will display the text “Attendees” aligned left with a text input field below the text
        - [complete?] Input field will be search box for the names of users within the event creator’s organization
    8. [complete] It will display the text “Repeating Event?” with a yes/no checkbox input to the right of Repeating Event?
        - If yes is selected:  
        1. [complete] A checkbox input field for the regularity of the event between daily, weekly, and monthly will appear below the yes/no checkbox input listed above.  
        2. [?] Two text inputs labelled “Start date” and “End date” will appear below the regularity of repetition
            - The input will be constrained to the format “MM/DD/YYYY”
    9. [complete] It will display the text “Reminder?” with a yes/no checkbox to the right of Reminder?
        - If yes is selected:
            1. [?] A dropdown selector for the amount of time before the event for the reminder to be sent, with the options: At the start time, 5 minutes before, 10 minutes before, 15 minutes before, 30 minutes before, an hour before, and a day before.
            2. [?] Reminders will appear as notifications from the web app at the selected time above (see “Alerts” section for a description of its format).
    10. [complete] It will display an “Add Event” button centered at the bottom of the modal
        - [complete] When selected, the system will add the event with all the settings and descriptive information entered above to the calendar.
        - [?] If a user input in an input field does not fit within the constraints, add new event will fail. The user will receive an error message next to incorrect fields notifying them of the incorrect input fields and the constraints of each field.
        - [?] Blank event forms will fail when add event button is selected and notify the user that they must at least input text into event name and date
    - **Verification**: Automated testing on add event form submission ensuring that user inputs into fields meet the constraints set by each field and required fields contain a user input. Automated testing will also be used to confirm with the database that a new event was created and it’s attributes match with each associated user input. A manual test will be done to confirm that the layout of the new event form modal matches with the criteria established by the requirements.
- [complete] On right click or single tap of a specific day/time/event on the calendar a pop-up menu appears giving users several options: Create new event, Edit event, or Delete event.
    - **Verification**: Manual test will be conducted to verify that a pop-up menu appears with the options of creating,editing, and deleting events when a user inputs a right click or double tap on an event item on the calendar. Automated testing will be used to verify a creation of an event, editing an existing event, or deleting an existing event within our database when the associated option is selected from  the menu by a user.
- [complete] On a single left click or single tap of an existing event pop-up box is created showing users a preview of the event.
    - This preview will display the event name at the top, the event time, alert time, and a button to edit the event.
    - **Verification**: Manual test to verify that a pop-up box appears next to an event with the attributes stated above when a user left click or single taps an event from the calendar. Automated testing will be conducted to verify that the event attributes displayed on the front end match the corresponding event and attributes stored in the database.
- [incomplete] Users can connect their Daily Grind Calendar with their Google Calendar by selecting the “Connect to Google Calendar” button.
    - User will be prompted by a google login box to enter gmail address and password
    - Google events are shown on the calendar
    - Events created in the web app are shown on their Google calendar 
    - **Verification**: Automated test to verify that a user’s Google Calendar events are consistent with the events that appear on a user’s DailyGrind Calendar. Manual testing will also be used to ensure that the Google Calendar API connects with DailyGrind when a user logs in to their Google account. Manual testing will also check the format and layout of the Google login.

## Breaks
![schedule break](img/break2.JPG)
- [] When a user’s break is scheduled, it will pop up on the screen, allowing the user to either snooze it or start their break.
    - [] The pop up will be in the center of the screen with a message stating that it is time for a break and buttons to either snooze or start a break.
    - **Verification**: This will be manually tested by scheduling a break and receiving visual confirmation that a pop up with the two buttons appears at the designated time. 
- [] If start is selected, user-selected work websites will be temporarily blocked and distraction websites unblocked until the break is complete. 
    - [] When the break ends, work websites will be made accessible and distraction worksites will be blocked again.
    - [] The list of a user’s work and distraction sites will be adjustable at any time through a form that asks users for the following.
        - Type of site: work or distraction
        - Site url
    - **Verification**: Manual testing will be done by setting a test user’s work sites and distraction sites. We will attempt to access one of each both during and after a break to insure that the work sites are inaccessible during breaks and distraction sites inaccessible outside of breaks.
- [] If snooze is selected, there will be a default time of 10 minutes until the break pop-up reappears.
    - [] The default time can be changed in the break tabs if the user is logged in. The user can also change the default snooze time according to their needs in the break tab. 
    - **Verification**: Visual verification of the pop up disappearing and reappearing after set time when snooze is clicked. Manual testing will be done by checking this with multiple default snooze times which will be changed in the user’s settings.
- [] Prior to a break ending, there will be a pop up on the screen displaying how much time is left to the user.
    - [] This notification will come halfway through the allotted time for the break and one minute before their break is up.
    - **Verification**: A manual test will be conducted by starting a breaks of various lengths and checking for visual confirmation of a pop up appearing at the right times. For example, if a ten minute break is scheduled to start at 4:30, a pop up should appear at 4:35 and 4:39.
- [] The size of the break notification at the top of their screen will be adjustable to avoid distractions, if they are logged in. 
    - **Verification**: Manual testing by changing the size of the notification in the user setting and receiving visual confirmation that the notification is smaller or larger. 

## Pre-Work Routines
![pre-work routine](img/routine.JPG)
- [complete] When the user logs in to the Daily Grind, the system will display the pre-work routine checklist.
    - **Verification**: There will be a manual test to ensure the system properly loads to this screen.
- [complete] When a user is logged in, their pre-work routine will be customizable.
    - **Verification**: There will be a manual test to ensure routine can be changed & stored to account.
- [complete] Each checklist item will have an unfilled “star” icon to the right of it; once selected, it will have a solid fill and will move to the top of the checklist.
    - **Verification**: There will be a visual inspection of the user interface, as well as a manual test to ensure that changed routine order is saved to user account.
- [incomplete] All pre-work routine items will allow users to snooze or set a start time
    - **Verification**: There will be a manual test to ensure that both of these functions are working properly. For snooze, we will check that the system sends the alert again 5 minutes later. For start time, we will check that the system will store that data and that the alert is sent out at the proper time.
- [complete] Users can add or delete items in their pre-work routine in the pre-work routine tab.
    - [revised: Add button is now located at the bottom of the dialogue.] To add an item in the pre-work routine, users will click the “plus” button at the top of the tab, and fill in the task as needed.
        - **Verification**: There will be a manual test to check that the added task was actually added to the user's pre-work routine.
    - [revised: Items can still be removed, but no confirmation dialogue is sent to the user.] To delete an item, users will select the item they want to delete by clicking on it. A menu will appear with a delete button as an option. If the user clicks on the delete button, they can either confirm or cancel. 
        - If confirm is selected, the pre-work item will be deleted.
        - If cancel is selected, the user can return to the previous page and the item will remain as it was before. 
        - **Verification**: There will be a manual test to check that the deleted task was actually deleted when confirmed and that the action will not be committed if the user selects cancel.

## To-Do List
![to-do list view](img/To-Do_1.jpg)
- [] The to-do list will have a button that when clicked, will add an item to the bottom of the to-do list.
    - **Verification**: There will a manual test to ensure that a new to-do list item is added to the end of the list when that button is clicked.
- [] The to-do list will be accessible by the navigation bar, where the To-Do list can be clicked to go to the to-do list page. 
    - **Verification**: There will be a manual test to ensure that a) "To-Do List" appears in the navigation bar and that b) when selected the user is directed to the "To-Do List" page.
- [] When an item is added, labels/tags and tags can be added to the item to categorize it.
    - [] Tags can be added to items by clicking the edit button, where the system will ask for input text of the desired tag name. 
    - **Verification**: There will be a manual test to ensure that tags are being properly added to & stored with to-do list items.
- [] When an item is added, colors can be added to an item to customize it.
    - [] Colors can be added to an item by clicking the appropriate color from a small menu of colors when an item is added.
    - **Verification**: There will be a manual test to ensure that colors are being properly added to & stored with to-do list items.
- [] When an item is added, there will be a drop-down menu to determine the importance of an item when that same menu is clicked, with a list of options ranging from least importance to most importance.
    - **Verification**: There will be a manual test to ensure that the drop-down menu works on the UI as expected and that the importance is properly stored with the to-do list item.
- [] Items on the to-do list can be edited by clicking on the item, opening a small menu with fields to edit (color, text, tags, importance), where clicking on the fields will open a menu with an input to edit.
    - **Verification**: There will be a manual test to ensure that any edited items are properly committed to the to-do list item.
- [] Items can be deleted from the to-do list by clicking on the item on the list, opening a small menu with a delete button that users can confirm or cancel.
    - **Verification**: There will be a manual test to ensure that deleted items will be removed from storage.
- [] To-do list items can only consist of text elements/rendered as strings. 
    - **Verification**: There will be a manual test to ensure that an error is thrown whenever a non-string is entered into the system.
- [] Information for the to-do list will be stored within the database. Whenever a to-do list item is added, it will be stored in the database under the user's account.
    - **Verification**: There will be a manual test to ensure that the user data is properly stored in the database by checking individual values.
- [] Items on the to-do list can be ordered by level of importance by clicking the filter button on the top-right of the to-do list menu and clicking the appropriate filter. 
    - **Verification**: There will be a visual inspection to ensure that this filtering process works properly.

## Alerts
- [complete?] The navigation bar will have a button titled “Alerts” that, when clicked, will take the user to the alerts page.
    - **Verification**: There will be a manual test to ensure that a) “Alerts” appears in the navigation bar and that b) when selected the user is directed to the “Alerts” page.
- [] When a user receives a time-sensitive alert (break time, meeting starting, etc.), it will pop-up in the middle of the screen, with three options: okay, snooze, close.
    - [] The “okay” button will mark the alert as read and will take the user to a seperate screen (for example, a break alert will take a user to the breaks page when “okay” is selected), if applicable.
    - [] The “snooze” button will close the alert and will re-send the alert in 5 minutes.
    - [] The “close” button will close the alert pop-up with no further action.
    - [] This alert will also be sent as a browser notification (if enabled) on the user’s device in the event they are not currently on our web application.
    - **Verification**: Visual verification/manual test to ensure pop-up appears as described.
- [] When a user receives a non-time-sensitive alert, it will appear in the upper right-hand corner of the screen and will disappear after 30 seconds.
    - [] After the alert disappears, a red dot will appear in the upper-right hand corner of the alert icon in the navigation bar, signaling that the user has an unread alert.
    - **Verification**: Manual test by sending the user an alert & ensuring that it sends to the user in the manner described above.
- [complete?] On the alerts page, alerts will be listed in reverse chronological order.
    - [incomplete] Time-sensitive alerts will be listed above all other alerts, even if they appeared before other requirements.
    - **Verification**: Visual inspection to ensure order of alerts is correct.
- [complete?] All alerts will be listed with a title, a description, and the date and time it was sent.
    - **Verification**: Visual inspection to ensure alerts contain all of the above fields.
- [complete?] Once a user selects an alert, it will expand all details of the alert and it will be marked as “read”.
    - **Verification**: Manual test to test the marking of alerts as “read”
- [complete?] Unread alerts will have a border twice as thick around them than read alerts.
    - **Verification**: Visual inspection of the border
- [complete?] On the top right-hand side of each alert, there will be a trash icon that will allow users to delete alerts once they no longer need to see the alert by opening up the following pop-up.
    - **Verification**: Manual test of deleting an event to ensure it deletes the alert from the user’s account.
- [revised or incomplete, probably] The pop-up message will appear reminding them that once they delete an alert it will be gone forever, asking the user to confirm (yes) or deny (no) if they would like to delete the alert.
    - **Verification**: Visual inspection to ensure that the pop-up a) appears after clicking/tapping/etc. the trash icon and b) the two buttons do either delete or keep the alert, respectively.

## Profile
- [complete?] The navigation bar will have a button titled “Profile” that, when clicked, will take the user to the profile page.
    - **Verification**: There will be a manual test to ensure that a) “Profile” appears in the navigation bar and that b) when selected the user is directed to the “Profile” page.
- [complete?] When a user navigates to their profile, they will see their profile photo, their display name, their organization, and their theme.
    - [complete?] The profile photo should be on the left-hand side of the page, with the display name and the organization on separate lines on the right, directly next to the profile photo. The theme should be listed below the rest of the information.
    - **Verification**: There will be a visual inspection of the page to ensure that the page displays the required information in the correct format.
- [complete?] There will be an edit button below all the profile information, and that button will redirect them to the profile settings on the settings page.
    - **Verification**: Manual test to ensure that the component is correctly redirecting to the Settings component.
- [complete?] When inputting information for creating/editing a profile, the following inputs will be optional: Job title, status, bio/description, and office hours. 
    - [complete?] If these fields have not been entered, they will appear as editable text boxes on the user’s profile page with a “Submit” button to the right of the text box, which will save changes to that field to the user’s profile.
    - **Verification**: Visual inspection to ensure that all fields appear, either with the submitted information or with the editable text box next to the field.
- [incomplete] This page will also be viewable by those who have been included as attendees or hosts on events with the user.
    - This page will look the same, but will exclude any optional fields that have not been filled out.
    - The edit button at the bottom of the page will become an “Add to preferred contacts list” button.
    - **Verification**: Visual inspection to ensure that the public-facing profile page does not include the editable information & only displays what is listed above.
- [] Users will be able to add members of their organization to their “preferred contacts” list, who will appear at the top of the list whenever the user is working with others (i.e. adding attendees to an event).
    - **Verification**: Visual inspection that the preferred contacts list appears on the profile page.
    - [] The list of preferred contacts, if it exists, will be listed on the right-hand side of the profile screen below the profile photo, display name, and organization.
        - [] At the top right-hand corner of this list there will be a “plus” icon to add contacts to this list.
        - [] This will pull up a dialogue that allows for the user to search through contacts in their organization(s) and add them to their preferred contacts list.
        - [] If there is a list of names separated by commas, the system will add all of the names to the user’s preferred contacts list.
        - [] At the bottom of the dialogue, there will be two buttons: confirm and cancel. 
        - [] Confirm will add the selected contacts to the preferred contacts list and cancel will close the dialogue without adding contacts to the list.
        **Verification**: There will be a manual test of the process of adding preferred contacts to your own list.
    - [revised: We did not complete a public profile page, i.e. this requirement is now unnecessary.] This list will only be visible to the user; it will not appear when other people view your profile.
        - **Verification**: Visual inspection that this does not appear in the public-facing profile.

## Database
- [complete?] Adding/editing a scheduled event to the calendar will store the event information to Firebase, keeping store of the date(s) the event occurs, the name of the event, description of the event, and attendees of the event.
    - **Verification**: Automated testing to ensure that the correct object is received by returning the added object and also checking the firebase reference by calling upon the database to see if it returns the value just added.
- [complete?] When a new user account is created, email and username will be stored to Firebase.
    - **Verification**: Automated testing by checking if the value is added to Firebase by calling the reference to the user account that just was created and comparing it to the information entered.
- [complete? maybe revised?] Adding/editing a pre-workout routine will store the pre-workout item to Firebase, storing information regarding whether it was fulfilled, the time it was scheduled, and if there was an option to snooze.
    - **Verification**: Automated testing by checking if the pre-workout item is added to Firebase by calling the reference to the item that was just created and then comparing it to the information submitted.
- [?] Adding/editing a to-do list item will store the item to Firebase, keeping store of the list item, the color of the item, and the tags associated with that to-do list item.
    - **Verification**: Automated testing by checking if the to-do list item will store the item to Firebase, keeping 
- [] Adding/editing a break will keep store of the time that the break occurs in Firebase.
    - **Verification**: Automated testing by returning the time that is sent to be stored in Firebase and then retrieving the time stored in Firebase and comparing it with the time sent to be stored in Firebase.
- [complete?] Deleting a scheduled event, pre-workout routine, break, to-do list item, and alert will remove that item from the Firebase database.
    - **Verification**: Automated tasting by returning the to-do list item that is deleted from firebase and comparing the item to the item that is selected to delete. 
