import { sendEvent, updateEvent, storeEvent, removeEvent } from './FirebaseController.js'

// Pre-Conditions: Information must have been requested
// from a controller and information must be in object form
// Post-Conditions: Succesfully retrives event and
// stores it in the state
export function retrieveEvent(event, id) {
    let eventObject = (event)

    let info = sendEvent(eventObject, "events/" + id)

    return info
}

// Pre-Conditions: Edit button must
// be clicked on for an existing event
// Post-Conditions: Displays any changes made
// to event 
export function editEvent(event, id) {
    let eventObject = (event)

    updateEvent(eventObject, "events/" + id)
}

// Pre-Conditions: Required information must be
// be filled before creating event
// Post-Conditions: Succesfully creates an event
// with inputted information and sends information
// to Firebase controller
export function createEvent(event, id) {
    let eventObject = (event)

    storeEvent(eventObject, "events/" + id)
}

// Pre-Conditions: Delete button must
// be clicked
// Post-Conditions: Succesfully sends information
// to remove from Firebase and to CalendarView
export function deleteEvent(event, id) {
    let eventObject = (event)

    removeEvent(eventObject, "events/" + id)
}