import storeEvent from './FirebaseController.js'

// Pre-Conditions: Information must have been 
// requested from FirebaseController
// Post-Conditions: Succesfully retrieves event
// and returns a list item
export function retrieveListItem(event) {

}

// Pre-Conditions: Required information must
// be filled before creating list item
// Post-Conditions: Succesfully creates
// a list item and sends information to
// EditToDoListView and FirebaseController
export function createListItem(event) {
    storeEvent(event)
}

// Pre-Conditions: Edit button must be clicked
// for an existing to-do list item
// Post-Conditions: Sends any changes made
// to-do list item to ToDoListView and EditToDoListView
export function editListItem(event) {
}

// Pre-Conditions: Delete button for
// to-do list item must be clicked.
// Post-Conditions: Successfully sends information
// to remove from Firebase to FirebaseController
// and to CalendarView
export function removeListItem(event) {
}
