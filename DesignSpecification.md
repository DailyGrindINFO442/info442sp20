# Design Specification

## Problem
Working from home comes with a myriad of challenges that more and more people find themselves facing every day. With the need for social distancing in the midst of the pandemic, more people are working and studying from home, despite being unprepared to do so. For many,  it is becoming increasingly difficult to stay productive as the line between the spaces of productivity and relaxation are blurred. The inability to compartmentalize spaces makes it hard to find the motivation needed to complete tasks that need to be done.
## Solution


## Specifications

### Necessary Features

**Home Page**
![login page](img/Home_1.HEIC)
![home page](img/Home_2.HEIC)

**Sign-in, Settings, and Navbar**
![sign-in page](img/signin)
![settings page](img/settings1)
![navbar](img/navbar)

* **Scheduling**: One of the tabs that a user can navigate to from the navigation bar. Refers to setting up or viewing current schedule.
    * ![main calendar screen](img/calendar_priti) The main calendar screen
    * **Add, Edit, & Remove**: Users have the ability to add, edit, and remove scheduled items. Scheduled items can be specified to a time block and be repeated throughout the calendar
                                in a selected timeframe. Users will click either the add, edit, or remove button accordingly.
        * Events should include a name, date, and time frame.
        * Events can include a description, a location, a meeting link, and other attendees.  
        * For adding, they can select the add button where a small menu
                                will pop-up with details for the scheduled item. These items are the time frame, days, and whether to repeat the scheduled item. Users can confirm this but
                                pressing the confirm button, adding the item to the schedule.
        * For editing, users can click on an already existing menu item bringing them to the item details.
                                Within the item details, there is an edit button which the user can click, allowing them to edit to values for the item.
        * For removing, users will follow a similar path to editing, except clicking on a remove button.
        * ![add event screen](img/Schedule_2.HEIC) Adding a new event to your schedule
        * ![previewing event](img/calendar2_priti) Previewing a selected event
* **Sync with Google Calendar**
    * Users should be able to connect their Google Calendar to our system
    * Google Calendar events should automatically sync onto their calendar on Daily Grind
    * Events created on Daily Grind should automatically sync onto the user's Google Calendar
    * Possible future extension would expand this functionality to other calendar apps, namely iCal.

* **Extension: Manager add to calendar**: Manager can add scheduled items to a users' account.
    * A user's manager should be able to send events to their calendar
    * The user should be able to accept or decline these events
* **Add Repeated Events**: When entering an item into their schedule, users can select the option to repeat that item through a certain time frame on certain days.
    * A user can repeat any event they create, either daily, weekly, or monthly.
* **Send Reminders**: Users can send reminders to themselves about a certain item that is coming up in their schedule. This option can be enabled for a certain scheduled item
    * Users can receive reminders for upcoming events on their dashboard
    * These reminders can be set for a day before, at the beginning of the day, an hour before, half an hour before, 15 minutes before, 10 minutes before, 5 minutes before, and/or
    at the start time.

* **Change between day, week, month, and year views**
    * Users can change the view of their schedule, displaying between the current day, week, month, and year.
    * The calendar should display the daily view by default
* **Built-In Breaks**
    * ![schedule break](img/break2) Schedule a new break
    * **Embedded Video & Audio Content**: Users can select preferred break activities, and they will be directly embedded into the system when applicable.
    * **Block user from navigating from that page until break timer ends**
        * Once a user navigates to the breaks screen, they will be unable to navigate away from the page until the timer hits 0:00.
        * ![break notification](img/breaks1) Notification to start your break
        * Notify users when their break is nearly over & when it has finished
            * Users should receive a notification on their dashboard and/or breaks screen once they have a minute of their break left.
            * Users should receive a notification on their dashboard and/or breaks screen once their break has ended
* **Pre-Work Routines** When the user logs into the application this will be the homge page or navigates to from the navigation bar.
    * ![pre-work routine](img/routine) Example of a pre-work routine
    * **Shows up on dashboard upon logging in**: A greeting to the user with the current day/week and scheduled items for the current day.
    * **Embed video & audio content**: If a user's pre-work routine includes video or audio content, it will be directly embedded into the system.
    * **Automatically add to front of user's to-do list**: The aspects of the pre-work routine will be automatically added to the front of the user's to-do list each day.
* **To-Do List**: The user can create a to-do list of immediate items that they need to complete without a defined time constraint. Accessible through the navigation bar menu.
    * ![to-do list view](img/To-Do_1.HEIC)
    * **Add, Edit, & Remove List items**: Users will be able to add, edit, and remove list items as needed.
        * ![add a new task](img/To-Do_2.HEIC) Add a new task to your to-do list
    * **Prioritize tasks (order from most to least important)**: List items can be prioritized or given an attribute that determines its importance. Users can then filter
    their to-do list by items that have most importance to least importance.
    * **Label Tasks (Different Projects, Different Jobs/Classes, etc.)**: Users can give customizable tasks to their to-do list items and define tasks to their needs.
* **Centralized Date**: When users login to the web-application, they will be shown the day of the week and the date in large print.

### Extra Features

* **Reminders**
* **Block Websites**
    * **Option to completely block**
    * **Option to block for certain amount of time or time range**
    * **Option to limit to certain amount of time**
    * **Default list of distracting amount of time**
* **Motivational Media**
* **Do Not Disturb**
* **Incentives**
