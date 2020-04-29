## Views 
- HeaderView: header of webpage & navbar 
    - This component displays the Daily Grind branding and the navigation bar
    - Resides in the client-side only
    - Does not communicate with other components 
- FooterView: contact information & typical footer information
    - This component displays the Daily Grind contact information
    - Resides in the client-side only
    - Does not communicate with other components
- WelcomeView: first screen after opening web app
    - This component displays the current date and site navigation
    - Resides in the client-side only
    - Does not communicate with other components
- CalendarView: displays calendar event information 
    This component displays a view of the calendar and event information
    Resides in the client-side only
    Communicates with the EventController component to receive information about calendar events
- EventView: add/edit/remove events 
    This component asks user to input information about an event and sends it to the EventController
    Resides in the client-side
    Communicates with EventController 
- ProfileView: displays user information 
    This component displays the user's profile information to themselves & other members of their organization.
    Resides in the client-side only
    Does not communicate with other components
- BreakView: displays the time left until break OR time remaining in break
    - This component displays the scheduled breaks as well as the amount of time left in a break or the time until the next break. 
    - Resides in the client-side only.
    - Communicates with BreakController to receive information about the time and duration of breaks
- EditBreakView 
    - This component asks users to input information about a break and sends it to BreakController
    - Resides in the client-side only.
    - Communicates with BreakController 
- PreWorkView: display pre-work routine checklist 
    - This component displays the user’s pre-work routine checklist when entering the home page
    - Resides in the client-side only 
    - Communicates with RoutineController to receive items related to the user’s pre-work routine
- AlertView: displays list of alerts to user’s account                             
    - This component displays an alert to the user during their allotted break time
    - Resides in the client-side only
    Communicates with the BreakController to receive break information
- SettingsView: displays the user’s settings
    - This component displays the user’s setting & allows them to change their account & privacy settings as well as authorized apps.
    - Resides in the client-side only
    - Communicates with the FirebaseController, sending any changed settings to the database.
- ToDoView: displays a user’s to-do list
    - This component displays the user's to-do list, including adding, editing, and deleting items to/from the to-do list
    - Resides in the client-side only
    - Communicates with RoutineController to receive to-do list items related to the user's pre-work routine
    - Also communicates with ToDoController to receive to-do list items that the user creates
- EditToDoView: 
    - This component asks the user to fill in input information about the to-do list item (title, importance, color, and tags) and sends it to the ToDoController
    - Resides in the client-side only
    - Communicates with ToDoController

## Model 
- DailyGrindModel: saves and returns information pertaining to user created events 
    - Communicates with EventController, SignUpController, ToDoController, BreakController, and RoutineController to store/send information from requests made from components.
    - Resides on server-side
    - Communicates through Firebase
    - Note: will not develop component ourselves

## Controller
- EventController: creating and handling calendar events 
    - Receives information regarding events (title, time, duration, and repetition) from the EventView and communicates that information to the CalendarView as event Objects.
    - Communicates with FirebaseController to store event information specific to a user.
- SignUpController: create account 
    - Receives information regarding user email and password from sign-up page
    - Communicates with FirebaseController to create a new user in the database with the given email and password
- ToDoController: create and edit to-do list items 
    - Receives information (title, importance, color, and tags) from the EditToDoView and communicates information to the ToDoView as to-do list objects
    - Communicates with FirebaseController to store to-do list information
- BreakController: schedule, notify, and handle breaks 
    - Receives break information (title, time, duration, and repetition) from the EditBreakView and sends it to the BreakView as break Objects.
    - Communicates with BreakView and EditBreakView, displaying the times left on BreakView based on information received from the EditBreakView.
    - Communicates with FirebaseController to store break information specific to a user
- RoutineController: create & manage pre-work routines 
    - This component manages all the steps of a user’s pre-work routine that will take place each morning at sign-on.
    - Communicates with the PreWorkView and ToDoView to send stored information about the user’s pre-work routine.
    - Communicates with FirebaseController to store pre-work routines specific to a user
