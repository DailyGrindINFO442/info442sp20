import { sendEvent, updateEvent, storeEvent, deleteEvent } from './FirebaseController.js'

// Pre-Conditions: Information must have been 
// requested from FirebaseController
// Post-Conditions: Succesfully retrieves event
// and returns a list item
export function retrieveListItem(event, id) {
    let eventObject = event

    let info = sendEvent(eventObject, "todolist/" + id)
    return info
}

// Pre-Conditions: Required information must
// be filled before creating list item
// Post-Conditions: Succesfully creates
// a list item and sends information to
// EditToDoListView and FirebaseController
export function createListItem(event, id) {
    let eventObject = event
    storeEvent(eventObject, "todolist/" + id)
}

// Pre-Conditions: Edit button must be clicked
// for an existing to-do list item
// Post-Conditions: Sends any changes made
// to-do list item to ToDoListView and EditToDoListView
export function editListItem(event) {
    let eventObject = event

    // Need to get the specific ID of the element in the 
    // todo-list we are editing in order to update it
    let eventObjectID = eventObject.id

    updateEvent(eventObject, "todolist/" + id + "/" + eventObjectID)
}

// Pre-Conditions: Delete button for
// to-do list item must be clicked.
// Post-Conditions: Successfully sends information
// to remove from Firebase to FirebaseController
// and to CalendarView
export function removeListItem(event, id) {
    let eventObject = event

    // Need to get the specific ID of the element in the 
    // todo-list we are editing in order to remove it
    let eventObjectID = eventObject.id

    deleteEvent("todolist/" + id + "/" + eventObjectID)
}
