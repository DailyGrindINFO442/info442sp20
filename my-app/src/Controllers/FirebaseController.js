import firebase from 'firebase/app';


// Pre-Conditions: Information must have been sent
// from a controller component
// Requires: Event, information received as an object
//           Route, path to send information to in Firebase
// Post-Conditions: Succesfully stores
// received information to Firebase
export function storeEvent(event, route) {
    let rootPath = firebase.database().ref(route)
    rootPath.push(event)
}



// Pre-Conditions: Information must be requested
// from a controller component
// Requires: Event, information received as an object
// Post-Conditions: Returns requested information
// from Firebase back to relevant controller
export function sendEvent(event, route) {
    let rootPath = firebase.database().ref(route)
    
    var info

    rootPath.once("value", (snapshot) => {
        info = snapshot.val()
    })

    return info
}

// Pre-Conditions: Information must be sent from a controller
// component along with the route with an object to update
// Post-Conditions: Successfully updates proper component
// in Firebase Database
export function updateEvent(event, route) {
    let rootPath = firebase.database().ref(route)
    rootPath.update({
        event
    })
}

// Pre-conditions: Information must be request
// from a controller component to remove
// Requires: Event, information received as an object
// Post-Conditions: Returns removed event information
// from Fireback back to relevant controller
export function removeEvent(route) {
    let rootPath = firebase.database().ref(route)
    rootPath.remove()
}