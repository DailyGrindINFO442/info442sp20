import { sendEvent, updateEvent, storeEvent, removeEvent } from './FirebaseController.js'

// Pre-Conditions: Information must have been 
// requested from FirebaseController
// Post-Conditions: Succesfully retrieves event
// and returns a routine item
export function retrieveRoutineItem(id) {
    let info = sendEvent("routine/" + id)
    return info
}

// Pre-Conditions: Required information must
// be filled before creating routine item
// Post-Conditions: Succesfully creates
// a routine item and sends information to
// ToDoView, PreWorkView, and FirebaseController
export function createRoutineItem(event, id) {
    let eventObject = event
    let returnedID = storeEvent(eventObject, "routine/" + id)
    return returnedID
}

// Pre-Conditions: displayEditPreWork must have been called
// Post-Conditions: Sends any changes made to PreWorView
// and ToDoView
export function editRoutineItem(event) {
    let eventObject = event
    
    // Do anything we need to do to the event here

    updateEvent(eventObject, "routine")
}

// Pre-Conditions: Delete button for
// routine list item must be clicked.
// Post-Conditions: Successfully sends information
// to remove from Firebase to FirebaseController
// and to ToDoView & PreWorkView
export function removeRoutineItem(event) {
    let eventObject = event

    // Do anything we need to do to the event here

    removeEvent(event, "routine")
}