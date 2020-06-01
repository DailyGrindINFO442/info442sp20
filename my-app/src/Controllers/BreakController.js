

// Pre-Conditions: Required information filled out in
// EditBreakView
// Post-Conditions: Succesfully creates a new break with
// information from the form and sends information to 

import { sendEvent, updateEvent, removeEvent } from "./FirebaseController"

// Firebase
export function newBreak(event, id) {
    let eventObject = event

    storeEvent(eventObject, "breaks/" + id)
}

export function retrieveBreak(event, id) {
    let eventObject = event

    sendEvent(eventObject, "breaks/" + id)
}

// Pre-Conditions: Edit button must
// be clicked on for an existing break
// Post-Conditions: Displays any changes made
// to break in BreakView
export function editBreak(event) {
    let eventObject = event

    updateEvent(eventObject, "breaks/" + id + "/" + eventObject.id)
}

// Pre-Conditions: Delete button must
// be clicked
// Post-Conditions: Succesfully sends information
// to remove from Firebase and to BreakView
export function deleteBreak(event) {
    let eventObject = event

    removeEvent(eventObject, "breaks/" + id + "/" + eventObject.id)
}